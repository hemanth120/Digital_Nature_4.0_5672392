package BuilderPattern;
public class Main{
	public static void main(String[] args)
	{
		Computer work =new Computer.Builder("i5", "8GB").setStorage("516GB").build();
		Computer gaming=new Computer.Builder("Ryzen","16GB").setStorage("1TB").setGPU("Nvidia RTX 100").build();
		work.ShowSpecifications();
		gaming.ShowSpecifications();
		}
}
