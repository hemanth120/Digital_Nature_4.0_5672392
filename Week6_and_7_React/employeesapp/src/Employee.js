// Define the Employee class
class Employee {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

// Updated and corrected employee data (including domain fix)
const EmployeesData = [
    new Employee(101, 'Jojo', 'jojo@cognizant.com', '98238971234'),
    new Employee(102, 'Sam', 'sam@cognizant.com', '9981184126'),
    new Employee(103, 'Elisa', 'elisa@cognizant.com', '9989389735'),
    new Employee(104, 'Ravi', 'ravi@cognizant.com', '9876543210'),         // New entry
    new Employee(105, 'Priya', 'priya@cognizant.com', '9123456789')        // New entry
];

// Exporting class and data
export default Employee;
export { EmployeesData };
