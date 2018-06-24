package com.epam.coderunner.runners;

import com.epam.coderunner.TestData;
import com.epam.coderunner.model.SourceCode;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import java.util.function.Function;

public final class RuntimeCodeCompilerTest {

    private final RuntimeCodeCompiler codeCompiler = new RuntimeCodeCompiler();

    @Before
    public void setup(){

    }

    @Rule public ExpectedException thrown = ExpectedException.none();

    @Test
    public void compileWithPackage(){
        final String source = TestData.readTaskFromResources(3).getSource();
        codeCompiler.compile(new SourceCode("com.github.someone.Solution3", source));
    }

    @Test
    public void badSourceCode() {
        thrown.expect(org.joor.ReflectException.class);
        codeCompiler.compile(new SourceCode("SomeClass","bullshit"));
    }

    @Test
    public void classLoadingPressureTesting(){
        final String source = TestData.readTaskFromResources(1).getSource();

        for (int i = 0; i < 100000; i++) {
           final Function<String, String> function = codeCompiler.compile(new SourceCode("Solution1", source));
           function.apply("someInput");
        }
    }
}