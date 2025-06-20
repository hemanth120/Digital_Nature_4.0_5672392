package SingletonPattern;
 public class Logger{
	 private static Logger instance;
	
	 String str;
	 private Logger(String str)
	 {
		 this.str=str;
	 }
	 
	 public static Logger getInstance(String str)
	 {
		 if(instance== null)
		 {
			instance = new Logger(str);
		 }
		 return instance;
	 }
	 public void display()
	 {
		 System.out.println(str);
	 }	
 }