package Inventory_management;
public class Product{
	int ProductId;
    String ProductName;
    int Quantity;
    double price;
    
    public Product(int ProductID, String ProductName, int Quantity, double price)
    {
    	    this.ProductId=ProductID;
    	    this.ProductName=ProductName;
    	    this.Quantity=Quantity;
    	    this.price=price;
    	    
    }
}
