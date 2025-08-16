import java.lang.*;
import java.util.*;

public class Animal{
    String name ="Bruno";
    int age=2;
    String Type="Dog";
    String Gender= "Male";

    void display(){
        System.out.println("Name:"+name);
        System.out.println("Age:"+age);
        System.out.println("Type:"+Type);
        System.out.println("Gender:"+Gender);
    }

    public static void main(String[] args){
        Animal s = new Animal();
        s.display();
    }
}