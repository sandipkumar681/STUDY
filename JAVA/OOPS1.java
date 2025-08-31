import java.util.*;
class InnerOOPS1 {
   int id;
   int salary;
   String name;
}

class OOPS1 {
   public static void main(String args[]) {
      // System.out.println("HI");
      // String name= "SANDIP";
      // char name[] ='KANHA'; -->wrong
      // char num[]={'K','A'};
      // System.out.println(num);
      Scanner sc = new Scanner(System.in);
      InnerOOPS1 P1 = new InnerOOPS1();
      P1.id = sc.nextInt();
      P1.salary = sc.nextInt();
      P1.name = sc.nextLine();
      // P1.name="SANDIP KUMAR BEHERA";
      System.out.println(P1.id);
      System.out.println(P1.salary);
      System.out.println(P1.name);
      // System.out.println(InnerOOPS1.name);
   }
}