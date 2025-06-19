package EcommerceSearch;

import java.util.*;
public class ProductSearch{
	
	public Product[] LinearSearch(Product[] products,String ProductName)
	{
		Product[] result=new Product[products.length];
		int i=0;
		for(Product p: products)
		{
	    if(p.productName.toLowerCase().contains(ProductName.toLowerCase())||p.Category.toLowerCase().contains(ProductName.toLowerCase()))
	    {
	        result[i]=p ;
	        i++;
	    }
		}
		return result;
		}
	public Product BinarySearch(Product[] products,String ProductName)
	{
		Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
		int left=0, right = products.length -1;
	    
		while(left<=right)
		{ int mid=(left+right)/2;
		int cmp=ProductName.compareToIgnoreCase(products[mid].productName);
			if(cmp == 0)
			{
				return products[mid];
			}
			else if(cmp<0){
				right = mid-1;
				
			}
			else {
				left= mid+1;
			}
		}

		
       return null;
	}
}