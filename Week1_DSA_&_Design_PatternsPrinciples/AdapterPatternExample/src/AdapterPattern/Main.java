package AdapterPattern;
import java.util.Scanner;
public class Main{
	public static void main(String[] args)
	{
		Scanner s=new Scanner(System.in);
		boolean status = true;
		while(status)
		{
			System.out.println("Choose a payment method \n 1. Phonepat \n 2. Amazonpay \n 3. Exit ");
			int n=s.nextInt();
			double amount=0.0;
			switch(n)
			{
			   
			case 1:
				System.out.println("Enetr the Amount");
			    amount = s.nextDouble();
				Phonepay phonepay = new Phonepay(new PhonepayGateway());
				phonepay.processPayment(amount);
				break;
			case 2:
				System.out.println("Enetr the Amount");
				amount = s.nextDouble();
				Amazonpay amazon=new Amazonpay(new AmazonpayGateway());
				amazon.processPayment(amount);
				
			case 3:
				System.out.println("Exited");
				status=false;
				break;
			default:
				System.out.println("chose a correct option");
			}
			
		}
		
		
	}
}