const taskList = require('./mock');

const getUserTasks = userId => {
  const allTasks = getAllTasks();
  const userTasksStatuses = {
    "ts1": "SOLVED",
      "ts2": "UNLOCKED",
      "ts3": "LOCKED"
  }
  return allTasks.map(task => {
    task.status = userTasksStatuses[task.id]
      return task;
  });
};

const getAllTasks = () => taskList;

// const getTaskById = (userId, taskId) => taskList.find(task => task.id == taskId);

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
};
