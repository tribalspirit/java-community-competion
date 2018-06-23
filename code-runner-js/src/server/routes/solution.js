const express = require('express');
const isAuthenticate = require('../auth/isAuthenticated');
const checkSubmission = require('../services/checkSubmission');

const router = express.Router();

router.post('/solution/:taskId', isAuthenticate, (req, res) => {
  if (!req.files.source) {
    return res.status(400).send('No files were uploaded.');
  }

  const sourceFile = req.files.source;
  const { taskId } = req.params;
  const source = sourceFile.data.toString('utf8');
  const userId = req.session.userId;

  console.log(`User ${userId} submitted code: ${source}`);
  const status = checkSubmission(taskId, userId, source, sourceFile.name.endsWith('.java') ? 'java' : 'js');

  res.send(status);
});

module.exports = router;
