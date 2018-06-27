import java.util.function.Function;

public class Solution22 implements Function<String, String> {

    public String apply(String s) {
        int L = 2, I = 0, C = 0;
        boolean B = false;
        for (String G : s.split(" ")) {
            if ("".equals(G)) {
                continue;
            }
            if (("piranha".equals(G) || "goomba".equals(G) || "koopa".equals(G)) && I == 0) {
                if (B) {
                    B = false;
                } else {
                    L--;
                }
            }
            if ("1Up".equals(G)) {
                L++;
            }
            if ("Mushroom".equals(G)) {
                B = true;
            }
            if ("Star".equals(G)) {
                I = 3;
            }
            if ("Princess".equals(G) || "Bowser".equals(G)) {
                return "WIN";
            }
            try {
                C += Integer.parseInt(G);
            } catch (Exception e) {
            }
            L += C / 100;
            C %= 100;
            I = Math.max(0, I - 1);
            if (L < 0) {
                return "GAME OVER";
            }
        }
        return "???";
    }

}
