import java.util.*;
class phone{
     void ringing(){
          System.out.println("THIS PHONE IS RINGING");
     }
     void vibrating(){
          System.out.println("THIS PHONE IS VIBRATING");
     }
     void silent(){
          System.out.println("THIS PHONE IS SILENT");
     }
}
class OOPS2{
     public static void main(String args[]) {
     phone first=new phone();
     first.ringing();
     first.vibrating();
     first.silent();
     }
}