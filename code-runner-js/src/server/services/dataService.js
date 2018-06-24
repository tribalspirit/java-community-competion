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
let asyncGet = promisify(client.get).bind(client);
let asyncHGetAll = promisify(client.hgetall).bind(client);


const getTaskIds = () => {
    return asyncSmemebers('taskIds')
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

const unlockNextTaskForUser = (userId, currentTaskId) => {
  const allTasks = getAllTasks();
  const currentUnlockedId = getUserTasks(userId).map(task => task.id);

  const index = allTasks.findIndex(task => task.id === currentTaskId);
  if (index === allTasks.length) {
    console.log(`User ${userId} has solved last task! `);
    return 'DONE';
  }
  const nextTaskId = allTasks[index + 1].id;
  if (!currentUnlockedId.includes(nextTaskId)) {
    // update redis to include next task in user's list
    console.log(`User ${userId} unlocked task ${nextTaskId}`);
  }
  return nextTaskId;
};








module.exports = {
  getUserTasks,
  unlockNextTaskForUser,
    initUserInRedis
};
