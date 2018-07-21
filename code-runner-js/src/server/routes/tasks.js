const express = require('express');

const router = express.Router();
const { getUserTasks } = require('../services/dataService');
const isAuthenticated = require('../auth/isAuthenticated');


router.get('/tasks', isAuthenticated, (req, res) => {
  const taskList = getUserTasks(req.session.userId);
  taskList
      .then(tasks => {
          const tasksUI = tasks.map(task => mapToTaskOnUI(task));
          // console.log(`returning list of tasks id to user ${req.session.userId}: ${tasksUI.map(task => task.id)}`);
          res.send(tasksUI);
      })
      .catch(e => console.log(e));
});

router.get('/tasks/:taskId', isAuthenticated, (req, res) => {
  const taskList = getUserTasks(req.session.userId);
  taskList
      .then(tasks => {
          const task = tasks.filter(task => task.id == req.params.taskId).map(task => mapToTaskOnUI(task));

          if (task.length > 0) {
              res.send(task[0]);
          } else {
              res.status(404).send(`task with id ${req.params.taskId} not found`);
          }
      })
      .catch(e => console.log(e));
});


mapToTaskOnUI = (taskFromRedis) => {
  const {
    id, title, shortDesc, longDesc, status
  } = taskFromRedis;
  return {
    id, title, shortDesc, longDesc, status
  };
};

module.exports = router;
