class check {
    check() {
        System.out.println("inside check constructor");
    }

    void random() {
        System.out.println("inside random");
    }

    int a = 81;
}

class Animal {
    void animalSound() {
        System.out.println("Animal is SLEEPING");
    }

    int Animal1 = 10;
}

class Dog extends Animal {
    void animalSound() {
        System.out.println("Dog is BARKING");
    }
}

class test1 {
    public static void main(String args[]) {
        Dog a1 = new Dog();
        a1.animalSound();
    }
}