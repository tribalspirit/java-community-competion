const express = require('express');
const fileUpload = require('express-fileupload');
const axios = require('axios');

const app = express();
var path = require("path");
app.use(fileUpload());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './../../dist/index.html'));
});

app.post('/task/:taskId', async function(req, res, next) {
    if (!req.files.source) {
        return res.status(400).send('No files were uploaded.');
    }

    let sourceFile = req.files.source;
    let taskId = req.params.taskId;

    if(sourceFile.name.endsWith('.java')){
        console.log(`Provided java code for taskId ${taskId}`);
        console.log(JSON.stringify({ source: sourceFile.data.toString('utf8')}));

        try{
            let result = await axios.post(`http://localhost:8090/task/${taskId}`, { source: sourceFile.data.toString('utf8')});
            console.log(`Submission id is ${result.data}`);
            res.redirect(`/submission/${result.data}`);
        } catch(e){
            console.log(e);
            next(e);
        }
    }
});

app.use(express.static(__dirname + './../../dist'));

app.listen(5000);