import java.util.function.Function;
import java.util.stream.Stream;

public class Solution33 implements Function<String, String> {
    @Override
    public String apply(String s) {
        String o = "", x = "", r = "", wP[] = {"123", "456", "789", "147", "258", "369", "159", "357"};
        for (int i = 0; i < s.length() && "".equals(r); i++) {
            if (i % 2 == 0) {
                o += s.charAt(i);
                if (c(o, wP)) r = "O";
            } else {
                x += s.charAt(i);
                if (c(x, wP)) r = "X";
            }
        }
        return "".equals(r) ? "?" : r;
    }

    static boolean c(String o, String[] x) {
        return Stream.of(x).anyMatch(s -> s.matches("^[" + o + "]*$"));
    }
}
