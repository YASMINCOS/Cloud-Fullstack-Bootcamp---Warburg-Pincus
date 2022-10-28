
import java.util.Scanner;

public class LojaDeTintas {
  public static void main(String[] args) {

        Scanner ler = new Scanner(System.in);
          double areaCoberta;
          areaCoberta =ler.nextDouble();
          double litros = ( areaCoberta / 6 );
          double sobraLatas = ( ( litros  % 18 ) > 0 ? 1 : 0 );
          double quantidadeLatas =  (int)( litros / 18 ) + sobraLatas;
          double sobraGaloes = ( ( litros % 3.6 ) > 0 ? 1 : 0 );
          double quantidadeGaloes =  (int)( litros / 3.6 ) + sobraGaloes;
          double valorLatas = 80.00 * quantidadeLatas;
          double valorGaloes = 25.00 * quantidadeGaloes;
                


    System.out.println("Quantidade(s) de lata(s) de tinta necessaria(s): " + (int) quantidadeLatas + " no valor R$ "  +  +valorLatas );
    System.out.println("Quantidade(s) de galao(oes) de tinta necessaria(s): " + (int) quantidadeGaloes + " no valor R$ "  + valorGaloes);
  }
}