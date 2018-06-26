const redis = require('redis');

const freqOrder = require('./freqOrder');
freqOrder.id = '1';

const marioTask = require('./mario');
marioTask.id = '2';

const tickTackToe = require('./ticTakToe');
tickTackToe.id = '3';

const domino = require('./domino');
domino.id = '4';

const tasks = [
    freqOrder,
    marioTask,
    tickTackToe,
    domino
];


const client = redis.createClient(); // this creates a new client

client.on('connect', () => {
    console.log('Redis client connected');
});
client.on('error', (err) => {
    console.log(`Something went wrong ${err}`);
});



client.keys('*', (err, replies) => {
    replies.forEach(key => client.del(key));
    tasks.forEach(task => client.set(`task:${task.id}`, JSON.stringify(task)));

    tasks.forEach(task => client.rpush('taskIds', task.id));

    client.quit();

});



