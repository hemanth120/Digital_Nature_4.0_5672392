package SingletonPattern;


public class Main{
	public static void main(String [] args)
	{
		Logger l1=Logger.getInstance("Created an instance for logger class, cannot create another anymore");
		Logger l2=Logger.getInstance("Trying to create a new Instance");
		l1.display();
		l2.display();
	}
}