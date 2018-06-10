package com.epam.coderunner.storage;

import com.epam.coderunner.model.Task;
import com.epam.coderunner.model.TestingStatus;

public interface TasksStorage {

    Task getTask(String taskId);
    void updateTestStatus(String submissionId, TestingStatus testingStatus);
}
