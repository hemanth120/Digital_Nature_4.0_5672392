package EcommerceSearch;

import java.util.Scanner;

public class Main{
	public static void main(String [] args)
	{
	   Product[] products = {new Product(1,"HP Pavilion 14","Laptop"), 
			   new Product(2,"IQOO Neo 9 Pro","Mobile"),
			   new Product(3, "HP Pavilion 13","Laptop"),
			   new Product(4,"Dell vostro","Laptop"),
			   new Product(5,"Realme 6","Mobile")
	   };
	   Scanner s=new Scanner(System.in);
	   String name= s.nextLine();
	   ProductSearch search=new ProductSearch();
	   Product[] n= search.LinearSearch(products,name);
	   
	   System.out.println("Linear Search:");
	   for(Product p : n)
	   {
		  if(p!=null)
		  {
			  System.out.println(p!=null? p.ProductID + "\n"+ p.productName +"\n" + p.Category + "\n"+" ":"Not Available");
		  }
		  
	   }
	   
	   Product k=search.BinarySearch(products,name);
	   System.out.println("Binary Search:");
	   System.out.println(k!=null?k.ProductID +"\n"+ k.productName +"\n"+ k.Category:"Not Available");
	   
	   s.close();
	}
}