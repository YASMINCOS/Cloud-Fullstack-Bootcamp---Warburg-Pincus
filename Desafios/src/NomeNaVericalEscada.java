import java.util.Scanner;

public class NomeNaVericalEscada {

	public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        String palavra = scanner.next();
        
        for(int i = 0;i< palavra.length();i++){
            System.out.println(palavra.substring(0,i+1));
        }
        
    }
}
