package project;
class circle {
    private double r;
    final double pi = 3.14;

    // double getR() {
    // return r;
    // }

    void putR(double radius) {
        r = radius;
    }

    void area() {
        System.out.println("Area of circle is " + pi * r * r);
    }
    void display(){
        System.out.println(r);
    }
}

class cylinder extends circle {
    private double r;
    private double h;

    // void putR(double radius) {
    //     r = radius;
    // }

    void putH(double height) {
        h = height;
    }

    void area() {
        System.out.println("Area of cylinder is " + pi * r * r);
    }

    void lateralSurfaceArea() {
        System.out.println("Lateral Surface Area of cylinder is " + 2 * pi * r * h);
    }
}

class circleCylinder {
    public static void main(String[] args) {
        // circle clr = new circle();
        // clr.putR(70);
        // clr.area();
        cylinder cyr = new cylinder();
        cyr.putR(13);
        cyr.putH(10);
        cyr.area();
        cyr.lateralSurfaceArea();
        cyr.display();
    }
}