import java.text.DecimalFormat;
import java.util.Scanner;

public class TempoDownloand {

	public static void main(String[] args) {
		
		 
		   DecimalFormat df = new DecimalFormat("#.##");
		

	        Scanner ler = new Scanner(System.in);

	        double tamanho, velocidade, tempo,veloMin;
	        double minutos;
	        tamanho = ler.nextDouble();
	        velocidade = ler.nextDouble();
	        
	        tempo = tamanho/velocidade;
	        veloMin = tempo / 60.0; 
	        minutos = (double)veloMin;

	        
	        

	        System.out.println(df.format(minutos));
	    }

}
