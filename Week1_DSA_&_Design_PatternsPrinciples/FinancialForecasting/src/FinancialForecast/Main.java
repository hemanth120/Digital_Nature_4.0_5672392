package FinancialForecast;
import java.util.Scanner;
public class Main{
	public static void main(String [] args)
	{
		Scanner s=new Scanner(System.in);
		double principle= s.nextDouble();
		double rate = s.nextDouble();
		int years = s.nextInt();
		FinancialForecast predict= new FinancialForecast();
		double k= predict.Forecast(principle, rate, years);
		//double r=predict.ForecastIterative(principle, rate, years);
		System.out.println(k);
		System.out.println("");
		//System.out.println(r);
		s.close();
	}
}