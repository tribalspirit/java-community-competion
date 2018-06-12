# java-community-competion

## Required environment

- Install JDK(>=8), Node.JS (>=8), Redis(>=3)

Redis for Windows can be download [here](https://github.com/MicrosoftArchive/redis/releases)

Recommend IntelliJ Ultimate as IDE - allows you edit JS and java code.

## Installing dependencies 

for code-runner, run ```mvn clean install``` or let IntellJ do the stuff automatically.
Note that I added AliYun mvn repo in pom.xml - may be you want to comment it out.

for code-runner-js - go to that folder and run ```npm install```
or right click on package.json - run npm install 


additionally JS project need nodemon available globally. Install it in console with:
```
npm install -g nodemon
```

## Importing task data to redis

Once redis is running, use node.js to import tasks data: 

```
cd code-runner-js/src/server/tasks
node taskSaver.js
```

Or in IntelliJ, right click on taskSaver.js - run "taskSaver"


## Starting java service

Start CodeRunnerApplication

## Starting JS part

```
cd code-runner-js
npm start
```

Or setup Npm Run configuration in Intellij. 



Once started, UI is available on localhost:5000
You can try to submit the code from code-runner/src/test/resources/Solution1.java

