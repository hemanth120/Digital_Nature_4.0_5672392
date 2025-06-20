package FactoryPatternMethod;
 public class WordDocumentFactory extends DocumentFactory{
	 
	 @Override
	 
	 
	 public Document createDocument()
	 {
		 
		 System.out.println("Created Word Document");
		 return new WordDocument();
	 }
 
 }