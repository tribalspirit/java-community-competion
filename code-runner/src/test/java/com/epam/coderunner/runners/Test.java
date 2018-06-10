package com.epam.coderunner.runners;


import java.util.function.Function;

public class Test implements Function<String, String> {

    @Override
    public String apply(String s) {
        return s;
    }
}
