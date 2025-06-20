package FinancialForecast;
public class FinancialForecast{
	public double Forecast(double principle, double rate, int years)
	{
		if(years==0)
		{
			return principle;
		}
	return Forecast(principle,rate, years-1)*(1+rate);
	}
	public double ForecastIterative(double principle,double rate, int years)
	{
		double result = principle;
		for(int i=1;i<=years;i++)
		{
			result = result*(1+rate);
		}
		return result;
	}
}
