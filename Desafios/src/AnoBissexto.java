import java.time.Year;
import java.util.Scanner;

public class AnoBissexto {

    public static void main(String[] args) {
        Scanner ent = new Scanner(System.in);
        int year;

        year = ent.nextInt();

      
        if (Year.isLeap(year)) { System.out.println("Bissexto");}
        else { System.out.println("Nao Bissexto"); }
    }
}