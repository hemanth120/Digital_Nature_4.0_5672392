package Inventory_management;
import java.util.HashMap;
public class InventorySystem{
	 private HashMap<Integer, Product> Inventory= new HashMap<>();
	 public void addProduct(Product product)
	 {
		 if(Inventory.containsKey(product.ProductId))
		 {
			 System.out.println("Product already exists");
		 }
		 else {
			 Inventory.put(product.ProductId,product);
		 }
	 }
	 public void updateProduct(int Id,String ProductName, int Quantity,double price)
	 {
		 Product oldprod= Inventory.get(Id);
		 if(oldprod!=null)
		 {
			 if(ProductName!=null)
			 {
			 oldprod.ProductName=ProductName;
			 }
			 if(Quantity!=0)
			 {
			 oldprod.Quantity=Quantity;
			 }
			 if(price!=0.0)
			{oldprod.price=price;
		    }
	
			 System.out.println("Updated the Product with Id"+Id+"\n");
			 
		 }
	 }
	 public void deleteProduct(int id)
	 {
		 if(Inventory.get(id)!=null)
		 {
			 Inventory.remove(id);
		 }
		 else {
			 System.out.println("Product not Found");
		 }
	 }
	 public void displayInventory()
	 {
		 for(Product p: Inventory.values())
		 {
		 System.out.println("Id:       "+p.ProductId);
		 System.out.println("Name:     "+p.ProductName);
		 System.out.println("Quantity: "+p.Quantity);
		 System.out.println("Price:    "+p.price+"\n");
		 }
	 }
	 
}