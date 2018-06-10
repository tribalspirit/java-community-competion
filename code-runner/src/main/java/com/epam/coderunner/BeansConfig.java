package com.epam.coderunner;

import com.epam.coderunner.storage.RedisTasksStorage;
import com.epam.coderunner.storage.TasksStorage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeansConfig {
    @Value("${redis.host}")
    private String redisHost;

    @Bean
    public TasksStorage tasksStorage(){
        return new RedisTasksStorage(redisHost);
    }
}
