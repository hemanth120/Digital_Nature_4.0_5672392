package Inventory_management;
public class Main{
	public static void main(String[] args)
	{
		Product product1 = new Product(1,"Laptop", 5,75000.0);
		Product product2= new Product(2,"Mobile", 6, 30000.0);
	InventorySystem i= new InventorySystem();
	i.addProduct(product1);
	i.addProduct(product2);
	i.displayInventory();
	i.updateProduct(1, null, 8, 70000.0);
	i.displayInventory();
	}
}
