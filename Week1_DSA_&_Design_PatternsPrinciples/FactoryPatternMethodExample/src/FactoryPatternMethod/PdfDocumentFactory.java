package FactoryPatternMethod;

public class PdfDocumentFactory extends DocumentFactory{
	@Override
	public Document createDocument()
	{
		System.out.println("Created PDF Document");
		return new PdfDocument();
	}
}