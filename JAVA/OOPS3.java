import java.util.*;

class a {
    int a1, a2;

    a(int x) {
        System.out.println(5 * x);
    }
}

class b extends a {
    int b1, b2;

    b(int x) {
        super(x);
        System.out.println("HI");
    }

    void display() {
        System.out.println(a1);
        System.out.println(a2);
        System.out.println(b1);
        System.out.println(b2);
    }
}

class OOPS3 {
    public static void main(String args[]) {
        b ob = new b(5);
        ob.display();
    }
}