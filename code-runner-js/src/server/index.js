const express = require('express');
const fileUpload = require('express-fileupload');
const axios = require('axios');

const cookeParser =  require('cookie-parser');
const bodyParser =  require('body-parser') ;
const expressValidator =  require('express-validator') ;
const session =  require('express-session') ;


const app = express();
var path = require("path");
app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookeParser());

app.use(session({ secret: 'java-and-js-are-friends-forever:D', resave: false, saveUninitialized: true, }));

app.use(expressValidator());


app.use('/public', express.static(__dirname + './../../dist/public'));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + './../../dist/public/index.html'));
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


app.listen(5000);