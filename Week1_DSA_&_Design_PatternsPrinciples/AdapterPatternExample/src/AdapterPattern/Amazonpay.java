package AdapterPattern;
public class Amazonpay{
	private AmazonpayGateway amazonpay;
	public Amazonpay(AmazonpayGateway amazonpay)
	{
		this.amazonpay=amazonpay;
	}
	public void processPayment(double amount)
	{
	  amazonpay.makePayment(amount);
	}
}