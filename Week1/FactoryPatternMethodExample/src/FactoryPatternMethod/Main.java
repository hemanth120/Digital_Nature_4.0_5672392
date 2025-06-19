package FactoryPatternMethod;
public class Main{
	public static void main(String[] args)
	{
		DocumentFactory worddoc= new WordDocumentFactory();
		Document word = worddoc.createDocument();
		word.open();
		DocumentFactory exceldoc = new ExcelDocumentFactory();
		Document excel= exceldoc.createDocument();
		excel.open();
	    DocumentFactory pdfdoc= new PdfDocumentFactory();
	    Document pdf = pdfdoc.createDocument();
	    pdf.open();
	   
	 
	}
	
}