# java-community-competion

# Introduction for participant

### What's the competition format? 
We prepared a series of task for you with increasing difficulty. In the beginning you only have access to the first task. Once you solve it, you gain the access to the next one. The first one who solves all tasks is the winner. 

We provide a platform for you to upload your solution and run all our tests against it.  In overall it'll be similar to TopCoder or Codeforces platforms. 

### What the task look like? 
The tasks will test you basic coding and logic abilities. No special api required. See this task as example. 

### What language supported? 
You can submit your solution written in Java or JS. Java code will be run by JDK 8 and JS in Node.JS 8.11.

You should only use the standard language api - no Guava or Lodash! 

# Tutorial for organizers

## Required environment

- Install JDK(>=8), Node.JS (>=8), Redis(>=3)

Redis for Windows can be download [here](https://github.com/MicrosoftArchive/redis/releases)

Recommend IntelliJ Ultimate as IDE - allows you edit JS and java code in one place.

## Project structure

The whole system consists of two application:
- Node.Js app that serves the web content, providing all front end apis and checks solution in JS
- Java app that providing api for checking Java solutions

Redis is used to store the user accounts and task submission details. 

The basic flow can be seens on the diagram below: 

![Sequence Diagram](/docs/main-seq.svg)

## Setting up the project

### Starting components

Code-runner-java is a standard maven application so run ```mvn clean install``` or let IntellJ do the stuff automatically.
Note that I added AliYun mvn repo in pom.xml - may be you want to comment it out if building outside of China.
Run CodeRunnerApllication call to start the app.

Code-runner-js is a standard Node.Js application - run ```npm install``` or right click on package.json - run npm install.
To start app run 
```
cd code-runner-js
npm start
```
Note that app will be started with nodemon, means it will automatically restart on every code change. 

### Importing tasks data into redis

Once redis is running, use node.js to import tasks data: 
For testing mock data:
```
cd code-runner-js/src/server/init
node initRedis.js
```

For real tasks: 
```
node initRedisSecret.js
```

Or in IntelliJ, right click on initRedis.js - run "initRedis.js"

### Authentication

User can input any userId on the login page. If such user does not exists yet - it will be created with only first task unlocked.

### Testing 
Once started, UI is available on localhost:5000
For testing you can submit code from code-runner-java/src/test/resources/Solution1.java or code-runner-js/src/server/tests/test-submission.js

## Solutions 
The working solution for competition tasks available in code-runner-java/src/test/java/Solution(11-44).java

