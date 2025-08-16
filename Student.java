import java.lang.*;
import java.util.*;

public class Student{
    String name ="Thanushree";
    int age =18;
    String branch ="CSE";
    String rollno ="A01";

    void display(){
        System.out.println("Name:"+name);
        System.out.println("Age:"+age);
        System.out.println("Branch:"+branch);
        System.out.println("Roll No:"+rollno);
    }

    public static void main(String[] args){
        Student s = new Student();
        s.display();
    }
}