var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/tasks', function (req, res) {
    res.send({
        tasks: [
            {
                id: '123',
                title: 'Task1'
            }
            ]
    });
});

module.exports = router;
