const redis = require('redis');
const task1 = require('./task1');

const tasks = [
    {
        id: 'ts1',
        title: 'ts1',
        shortDesc: 'ts1',
        longDesc: "# java-community-competion\n" +
        "\n" +
        "## Required environment\n" +
        "\n" +
        "- Install JDK(>=8), Node.JS (>=8), Redis(>=3)\n" +
        "\n" +
        "Redis for Windows can be download [here](https://github.com/MicrosoftArchive/redis/releases)\n" +
        "\n" +
        "Recommend IntelliJ Ultimate as IDE - allows you edit JS and java code.\n" +
        "\n" +
        "## Installing dependencies \n" +
        "\n" +
        "for code-runner, run ```mvn clean install``` or let IntellJ do the stuff automatically.\n" +
        "Note that I added AliYun mvn repo in pom.xml - may be you want to comment it out.\n" +
        "\n" +
        "for code-runner-js - go to that folder and run ```npm install```\n" +
        "or right click on package.json - run npm install \n" +
        "\n" +
        "\n" +
        "additionally JS project need nodemon available globally. Install it in console with:\n" +
        "```\n" +
        "npm install -g nodemon\n" +
        "```\n" +
        "\n" +
        "## Importing task data to redis\n" +
        "\n" +
        "Once redis is running, use node.js to import tasks data: \n" +
        "\n" +
        "```\n" +
        "cd code-runner-js/src/server/tasks\n" +
        "node taskSaver.js\n" +
        "```\n" +
        "\n" +
        "Or in IntelliJ, right click on taskSaver.js - run \"taskSaver\"\n" +
        "\n" +
        "\n" +
        "## Starting java service\n" +
        "\n" +
        "Start CodeRunnerApplication\n" +
        "\n" +
        "## Starting JS part\n" +
        "\n" +
        "```\n" +
        "cd code-runner-js\n" +
        "npm start\n" +
        "```\n" +
        "\n" +
        "Or setup Npm Run configuration in Intellij. \n" +
        "\n" +
        "\n" +
        "\n" +
        "Once started, UI is available on localhost:5000\n" +
        "You can try to submit the code from code-runner/src/test/resources/Solution1.java\n" +
        "\n",
        acceptanceTests: {
            '1': '1',
            '1,2,3': '6',
            '1,2,3,4,5,6': '21',
        },
    },
    {
        id: 'ts2',
        title: 'ts2',
        shortDesc: 'ts1',
        longDesc: 'ts1',
        acceptanceTests: {
            '1,2,3,4,5,6': '21',
        },
    },
    {
        id: 'ts3',
        title: 'ts3',
        shortDesc: 'ts3',
        longDesc: 'ts3',
        acceptanceTests: {
            '1,2,3,4,5,6': '21',
        },
    },
]


const client = redis.createClient(); // this creates a new client
client.on('connect', () => {
  console.log('Redis client connected');
});
client.on('error', (err) => {
  console.log(`Something went wrong ${err}`);
});

tasks.forEach(task => client.set(`task:${task.id}`, JSON.stringify(task)));



