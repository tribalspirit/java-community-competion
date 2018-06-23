var express = require('express');
var router = express.Router();

router.post('/solution/:taskId', (req, res, next) => {
    if (!req.files.source) {
        return res.status(400).send('No files were uploaded.');
    }

    let sourceFile = req.files.source;
    let taskId = req.params.taskId;

    let source = sourceFile.data.toString('utf8');

    res.send(`Submitted content: ${source}`)

    // if(sourceFile.name.endsWith('.java')){
    //     console.log(`Provided java code for taskId ${taskId}`);
    //     console.log(JSON.stringify({ source: sourceFile.data.toString('utf8')}));
    //
    //     try{
    //         let result = axios.post(`http://localhost:8090/task/${taskId}`, { source: sourceFile.data.toString('utf8')});
    //         console.log(`Submission id is ${result.data}`);
    //         res.redirect(`/submission/${result.data}`);
    //     } catch(e){
    //         console.log(e);
    //         next(e);
    //     }
    // }
});

module.exports = router;