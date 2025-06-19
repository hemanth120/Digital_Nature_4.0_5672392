package FactoryPatternMethod;

public class ExcelDocumentFactory extends DocumentFactory{
	@Override
	public Document createDocument()
	{
		System.out.println("Created an Excel File");
		return new ExcelDocument();
	}
}