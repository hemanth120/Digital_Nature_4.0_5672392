package FactoryPatternMethod;

public class WordDocument implements Document{
	@Override
	
	public void open()
	{
		System.out.println("Opening word Doc");
	}
}