import java.util.Scanner;

public class TaxaCreescimento {
	
	    public static void main(String[] args) {
	        double a, b;

	        Scanner input = new Scanner(System.in);
	        a = input.nextInt();
	        b = input.nextInt();
	              
	        int anos = 0;
	        while(a<= b) {
	        	a += a * 0.03;
	        	b += b * 0.015;
	        	anos += 1;
	        	}


	        System.out.println(anos + " anos");
	    
	}
}