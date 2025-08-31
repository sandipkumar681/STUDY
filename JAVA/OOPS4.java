// import java.util.*;
class a11 {
    a11(int x) {
        System.out.println("I AM BASE CLASS");
    }
}

class b11 extends a11 {
    b11(int x) {
        super(x);
        System.out.println("I AM SUB CLASS");
    }
}

class OOPS4 {
    public static void main(String args[]) {
        b11 ob = new b11(10);
    }
}