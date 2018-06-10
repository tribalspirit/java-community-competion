package com.epam.coderunner.controllers;

import com.epam.coderunner.model.Task;
import com.epam.coderunner.runners.JavaCodeRunner;
import com.epam.coderunner.storage.TasksStorage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

@Controller
public class FileUploadController {
    private static final Logger LOG = LoggerFactory.getLogger(FileUploadController.class);


    @Autowired
    private JavaCodeRunner runner;

    @Autowired
    private TasksStorage tasksStorage;

    @GetMapping("/")
    public String loadUploadPage(){
        return "uploadForm";
    }

    @PostMapping("/task/{taskId}")
    public @ResponseBody String handleFileUpload(@PathVariable String taskId, @RequestBody String code) throws IOException {
            Task task = tasksStorage.getTask(taskId);
            LOG.debug("Running code {}", code);
            return runner.runCode("Solution" + taskId, code, task.getAcceptanceTests());
    }

}
