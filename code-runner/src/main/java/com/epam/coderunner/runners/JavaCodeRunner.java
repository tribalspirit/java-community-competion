package com.epam.coderunner.runners;

import com.epam.coderunner.Status;
import com.epam.coderunner.model.TestingStatus;
import com.epam.coderunner.storage.TasksStorage;
import org.joor.Reflect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.util.function.Function;

@Component
public class JavaCodeRunner {

    @Autowired
    private TasksStorage tasksStorage;

    private Executor executor = Executors.newCachedThreadPool();

    private static final Logger LOG = LoggerFactory.getLogger(JavaCodeRunner.class);

    public String runCode(String className, String source, Map<String, String> inputOutputs) {
        try {
            Function<String, String> function = Reflect.compile(className, source).create().get();
            String submissionId = "" + System.currentTimeMillis();

            LOG.debug("Checking code with submission id {}", submissionId);
            executor.execute(() -> {
                checkSolution(inputOutputs, function, submissionId);
            });
            return submissionId;
        } catch(Exception e){
            LOG.error("Error while compiling: ", e);
            return "COMPILATION_ERROR: " + e.getMessage();
        }
    }

    private void checkSolution(Map<String, String> inputOutputs, Function<String, String> function, String submissionId) {
        try {
            TestingStatus testingStatus = new TestingStatus();

            boolean allTestsPassed = true;
            for (Map.Entry<String, String> entry : inputOutputs.entrySet()) {
                String input = entry.getKey();
                String expected = entry.getValue();
                String actual = function.apply(input);
                if (!actual.equals(expected)) {
                    testingStatus.addStatus(Status.FAIL);
                    allTestsPassed = false;
                    LOG.info("Submission id {} failed on test [{}]. Expected: [{}], actual: [{}]", submissionId, input, expected, actual);
                } else {
                    testingStatus.addStatus(Status.PASS);
                }
                tasksStorage.updateTestStatus(submissionId, testingStatus);
            }
            testingStatus.setAllTestsDone(true);
            testingStatus.setAllTestsPassed(allTestsPassed);
            tasksStorage.updateTestStatus(submissionId, testingStatus);
            LOG.info("Submission id is checked. All tests passed: {}", allTestsPassed);
        } catch (Throwable th){
            LOG.error("Error while checking submission {}", submissionId, th);
        }
    }
}
