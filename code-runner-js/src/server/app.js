const express = require('express');
const fileUpload = require('express-fileupload');
const axios = require('axios');
let isAuthenticated = require('./auth/isAuthenticated');

const cookieParser =  require('cookie-parser');
const bodyParser =  require('body-parser') ;
const expressValidator =  require('express-validator') ;
const session =  require('express-session') ;

const app = express();
var path = require("path");

const tasksApi = require('./routes/tasksList');



app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    secret: 'java-and-js-are-friends-forever:D',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));

app.use(expressValidator());

app.use('/public', express.static(__dirname + './../../dist/public'));

app.use('/api', tasksApi);

app.post('/api/login', (req, res) => {
    if(req.body.email){
        console.log('auth as ', req.body.email);
        req.session.userId=req.body.email;
        console.log(req.session);
        req.session.save();
        res.send(`Authenticated as ${req.body.email}`)
    } else {
        console.log('No email provided')
    }
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + './../../dist/public/login.html'));
});
app.get('*', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname + './../../dist/public/index.html'));
});

app.post('/task/:taskId', (req, res, next) => {
    if (!req.files.source) {
        return res.status(400).send('No files were uploaded.');
    }

    let sourceFile = req.files.source;
    let taskId = req.params.taskId;

    if(sourceFile.name.endsWith('.java')){
        console.log(`Provided java code for taskId ${taskId}`);
        console.log(JSON.stringify({ source: sourceFile.data.toString('utf8')}));

        try{
            let result = axios.post(`http://localhost:8090/task/${taskId}`, { source: sourceFile.data.toString('utf8')});
            console.log(`Submission id is ${result.data}`);
            res.redirect(`/submission/${result.data}`);
        } catch(e){
            console.log(e);
            next(e);
        }
    }
});

module.exports = app;