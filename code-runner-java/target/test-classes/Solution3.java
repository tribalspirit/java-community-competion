package com.github.someone;

import java.util.function.Function;

public class Solution3 implements Function<String, String> {

    @Override
    public String apply(String s) {
        return "with-package";
    }

    public static void main(String[] args){
        throw new AssertionError("This should not be touched!");
    }
}