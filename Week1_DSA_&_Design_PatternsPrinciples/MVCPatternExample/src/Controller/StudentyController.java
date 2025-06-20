package Controller;
import Model.Student;
import Veiw.StudentVeiw;
public class StudentyController{
	private Student model;
	private StudentVeiw veiw;
	public StudentyController(Student student,StudentVeiw veiw)
	{   this.model=student;
	    	this.veiw=veiw;
	}
	public Student setName(String name) {
		model.name=name;
		 return model;
	}
	public Student setGrade(String grade)
	{
		model.grade=grade;
		return model;
	}
	public Student setId(int id)
	{
		model.id=id;
		return model;
	}
	public void updateVeiw() {
		veiw.displayStudentDetails(model.id,model.name,model.grade);
	}
	
	
}