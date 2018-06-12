let task1 = require("./task1");

let redis = require('redis');
let client = redis.createClient(); // this creates a new client
client.on('connect', function() {
    console.log('Redis client connected');
});
client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

client.set('task:1', JSON.stringify(task1));

client.get("task:1", (err, reply) => console.log(reply));