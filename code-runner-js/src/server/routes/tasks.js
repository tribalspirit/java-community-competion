var express = require('express');
var router = express.Router();
const isAuthenticated = require('../auth/isAuthenticated');
let taskList = require('./mock');


router.get('/tasks', isAuthenticated, function (req, res) {
    const tasks = taskList.map(task => mapToTaskOnUI(task));
    console.log(`returning list of tasks id to user ${req.session.userId}: ${tasks.map(task => task.id)}`);
    res.send(tasks);
});

router.get('/tasks/:taskId', isAuthenticated, function (req, res) {
    const task = taskList.filter(task => task.id == req.params.taskId).map(task => mapToTaskOnUI(task));

    if(task.length >0){
        res.send(task[0])
    } else {
        res.status(404).send(`task with id ${req.params.taskId} not found`)
    }
});


mapToTaskOnUI = (taskFromRedis) => {
    const { id, title, shortDesc, longDesc, testExamples} = taskFromRedis;
    return { id, title, shortDesc, longDesc, testExamples};
};

module.exports = router;
