class base {
    base() {
        System.out.println("I am a base class constructor");
    }
    base(int x) {
        System.out.println("I am a base class constructor with a value");
    }
    void display() {
        System.out.println("SUCCESSFUL RUN");
    }
}
 class derived extends base {
    derived() {
        System.out.println("I am a derived class constructor");
    }
    static void checking() {
        System.out.println("SUCCESSFUL");
    }
    derived(int x) {
        super(x);
        System.out.println("I am a derived class constructor with a value");
    }
}
class test2 extends derived {
    public static void main(String[] args) {
        // checking();
         derived myObj = new derived();
        // derived myObj1 = new derived(9);
        // myObj.derived(9);
        // myObj.derived();
        // derived();
        // myObj1.checking();
        // super.checking();
    }
}

// class newt extends derived {
//     void shop(){
//         super.super.display();
//     }
// }