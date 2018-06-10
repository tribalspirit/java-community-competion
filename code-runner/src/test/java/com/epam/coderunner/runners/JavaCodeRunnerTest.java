package com.epam.coderunner.runners;

import com.google.common.collect.ImmutableMap;
import org.junit.Test;

import java.util.Map;

public class JavaCodeRunnerTest {

    private String code = "" +
            "import java.util.function.Function;\n" +
            "\n" +
            "public class Test implements Function<String, String> {\n" +
            "\n" +
            "    @Override\n" +
            "    public String apply(String s) {\n" +
            "        return s;\n" +
            "    }\n" +
            "}";

    private JavaCodeRunner runner = new JavaCodeRunner();


    @Test
    public void shouldCompileAndRun(){

        Map<String, String> inOut = ImmutableMap.of(
                "1", "1",
                "2", "2",
                "asdasd, asdads", "asdasd, asdasd"
        );



        runner.runCode("Test", code, inOut);
    }
}