import java.util.Scanner;
/*THIS IS A PROGRAME TO CHECK WHETHER A NUMBER IS PALINDROME OR NOT */
class Palindrome {
    static int palindromeCheck(int num, int revnum) {
        while (num > 0) {
            if (num % 10 == revnum % 10) {
            } else {
                System.out.println("NUMBER IS NOT A PALINDROME NUMBER");
                return -1;
            }
            num /= 10;
            revnum /= 10;
        }
        System.out.println("NUMBER IS A PALINDROME NUMBER");
        return 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENTER THE NUMBER");
        int num = sc.nextInt();
        int a = num;
        sc.close();
        int revnum = 0;
        while (a > 0) {
            revnum = revnum * 10 + a % 10;
            a /= 10;
        }
        palindromeCheck(num, revnum);
    }
}