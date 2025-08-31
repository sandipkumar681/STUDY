class agh {
     private int id;
     private String name;

     void setname(String x) {
          this.name = x;
     }

     String getname() {
          return this.name;
     }

}

// import java.util.*;
class access_modifier {
     public static void main(String args[]) {
          agh Sandip = new agh();
          // Sandip.id = 101;
          // Sandip.name = "KANHA";
          Sandip.setname("KANHA");
          System.out.println(Sandip.getname());
          agh Sandip1 = new agh();
          Sandip1.setname("KANHA1");
          System.out.println(Sandip1.getname());
     }
}