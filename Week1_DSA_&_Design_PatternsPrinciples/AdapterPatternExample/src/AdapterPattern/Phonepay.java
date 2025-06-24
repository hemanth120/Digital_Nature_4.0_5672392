package AdapterPattern;
public class Phonepay implements PaymentProcessor{
	
	private PhonepayGateway phonepay;
	
	public Phonepay(PhonepayGateway phonepay)
	{
		this.phonepay = phonepay;
	}
	
	
	@Override
	public void processPayment(double amount)
	{
		phonepay.makePayment(amount);
	}
}