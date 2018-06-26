import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Solution11 implements Function<String, String> {

    public String apply(String s) {
        Map<Integer, Long> c = s.chars().boxed().collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        Comparator<Map.Entry<Integer, Long>> a = Comparator.comparing(Map.Entry::getValue);
        List<Map.Entry<Integer, Long>> l = c.entrySet().stream().sorted(a.thenComparing(Map.Entry::getKey)).collect(Collectors.toList());
        String r = "";
        for (Map.Entry<Integer, Long> o : l) {
            for (int i = 0; i < o.getValue(); i++) {
                r += Character.toString((char) o.getKey().intValue());
            }
        }
        return r;
    }

}
