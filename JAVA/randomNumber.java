import java.util.*;

class a1 {
    static void game(int a, int b,int c) {
        if (a == b) {
            // break;
            System.out.println("YOU WIN IN " +c+" attempt(s)");
        }
        if (a > b) {
            System.out.println("TOO SMALL");
        }
        if (a < b) {
            System.out.println("TOO BIG");
        }
    }
}

class randomNumber {
    public static void main(String args[]) {
        Random rand = new Random();
        int num = rand.nextInt(100);
        System.out.println(num);
        System.out.println("ENTER THE GUESSED NUMBER");
        Scanner sc = new Scanner(System.in);
        int guessNum = 0;
        int try1 = 1;
        while (num != guessNum) {
            guessNum = sc.nextInt();
            a1.game(num, guessNum,try1);
            try1++;
        }
        sc.close();
    }
}