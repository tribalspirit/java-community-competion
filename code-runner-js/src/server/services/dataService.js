const redis = require('redis');
const {promisify} = require('util');

const client = redis.createClient(); // this creates a new client

client.on('connect', () => {
    console.log('Redis client connected');
});
client.on('error', (err) => {
    console.log(`Something went wrong ${err}`);
});


let asyncSmemebers = promisify(client.smembers).bind(client);
let asyncLrange = promisify(client.lrange).bind(client);
let asyncGet = promisify(client.get).bind(client);
let asyncHGetAll = promisify(client.hgetall).bind(client);


const getTaskIds = () => {
    return asyncLrange('taskIds', 0, -1)
        .then(ids => {
            console.log('Tasks ids:', ids);
            return ids;
        })
        .catch(e => console.log(e));
};

const getAllTasks = () => {
    const taskIds = getTaskIds();
    return taskIds
        .then(ids => {
            let tasksPromises = ids.map(taskId => asyncGet(`task:${taskId}`));
            return Promise.all(tasksPromises);
        })
        .catch(e => console.log(e))
};

const initUserInRedis = (userId) => {
    const users = client.smembers('userIds', (err, replies) => {
        console.log(replies);
        if(replies.length > 0 && replies.includes(userId)){
            console.log(`User ${userId} already exists`);
        } else {
            client.sadd('userIds', userId);
            const taskIds = getTaskIds();
            taskIds.then(ids => {
                console.log(ids);
                client.hset(`status:${userId}`, ids[0], "UNLOCKED");
                for(let i=1;i<ids.length;i++){
                    client.hset(`status:${userId}`, ids[i], "LOCKED")
                }
            })
                .catch(e => console.log(e))

        }
    });

};

const getUserTaskStatuses = (userId) => {
  return asyncHGetAll(`status:${userId}`)
      .then(tasksStatuses => {
          console.log(`Task statuses for user ${userId}: ${JSON.stringify(tasksStatuses)}`)
          return tasksStatuses;
      })
      .catch(e => console.log(e))
};


const getUserTasks = userId => {
  const allTasksPromise = getAllTasks();
  const userTasksStatusesPromise = getUserTaskStatuses(userId);
  return Promise.all([allTasksPromise, userTasksStatusesPromise])
      .then((results) => {
          console.log('Results:', results);
          let allTasks = results[0];
          let userTasksStatuses = results[1];
          let enrichedTasks = allTasks.map(task => {
              let taskObj = JSON.parse(task);
              taskObj.status = userTasksStatuses[taskObj.id];
              return taskObj;
          });
          console.log('Enriched tasks: ', enrichedTasks);
          return enrichedTasks;
      })
      .catch(e => console.log(e))
};

const markTaskAsDoneAndUnlockNextTaskForUser = (userId, currentTaskId) => {
  getUserTasks(userId)
      .then(tasks => {
          const index = tasks.findIndex(task => task.id === currentTaskId);
          if (index === tasks.length) {
              console.log(`User ${userId} has solved last task! `);
          } else {
              const nextTaskId = tasks[index + 1].id;
              client.hset(`status:${userId}`, currentTaskId, "SOLVED");
              client.hset(`status:${userId}`, nextTaskId, "UNLOCKED");
              console.log(`User ${userId} solved task ${currentTaskId} and unlocked task ${nextTaskId} at ${new Date()}`)
          }

      })
};

const saveSubmissionInfo = (userId, taskId, result) => {

}


module.exports = {
  getUserTasks,
    markTaskAsDoneAndUnlockNextTaskForUser,
    initUserInRedis
};
