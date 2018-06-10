package com.epam.coderunner.storage;

import com.epam.coderunner.model.Task;
import com.epam.coderunner.model.TestingStatus;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import redis.clients.jedis.Jedis;

public class RedisTasksStorage implements TasksStorage {

    private static final Logger LOG = LoggerFactory.getLogger(RedisTasksStorage.class);

    private String redisHost;

    private final Jedis jedis;
    private Gson gson = new Gson();


    public RedisTasksStorage(String redisHost){
        LOG.debug("Redis host: {}", redisHost);
        this.redisHost = redisHost;
        jedis = new Jedis(this.redisHost);
    }


    public Task getTask(String taskId){
        return gson.fromJson(jedis.get("task:"+taskId), Task.class);
    }

    public void updateTestStatus(String submissionId, TestingStatus testingStatus){
        String json = gson.toJson(testingStatus);
        LOG.debug("testing status: {}", json);
        jedis.set(generateSubmissionKey(submissionId), json);
    }


    private String generateSubmissionKey(String submissionId){
        return "submission:" + submissionId;
    }

}
