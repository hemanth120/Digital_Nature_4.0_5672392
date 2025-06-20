package Implementation;
import Model.Student;
import Veiw.StudentVeiw;
import Controller.StudentyController;
public class Main{
	public static void main(String[] args)
	{
	   Student student = new Student("Hemanth",1,"A");
	   StudentVeiw veiw=new StudentVeiw();
	  StudentyController control=new StudentyController(student,veiw);
	  control.updateVeiw();
	  control.setName("Balaji");
	   control.setGrade("O");
	   control.updateVeiw();
	}
	
}