package BuilderPattern;

public class Computer{
	private final String CPU;
	private final String RAM;
	private String Storage;
	private String GPU;
	private Computer(Builder builder)
	{
	  this.CPU=builder.CPU;
	  this.RAM=builder.RAM;
	  this.Storage=builder.Storage;
	  this.GPU=builder.GPU;
		
	}
	public static class Builder{
		private String CPU;
		private String RAM;
		private String Storage;
		private String GPU;
		Builder(String CPU, String RAM)
		{
			this.CPU=CPU;
			this.RAM=RAM;
		}
		
		 public Builder setStorage(String Storage)
		 {
			 this.Storage=Storage;
			 return this;
		 }
		 public Builder setGPU(String GPU)
		 {
			 this.GPU=GPU;
			 return this;
		 }

			public Computer build()
			{
				return new Computer(this);
			}
	}
	
	
  public void ShowSpecifications()
  {
	  System.out.println(CPU);
	  System.out.println(RAM);
	  System.out.println(Storage);
	  System.out.println(GPU);
	  System.out.println("\n");
  }
	
}