const express = require('express');

const router = express.Router();
const { getDashboardState } = require('../services/dataService');


router.get('/status', (req, res) => {
    getDashboardState()
        .then(data => {
            res.send(data);
        })
        .catch(e => console.log(e));
});

module.exports = router;
