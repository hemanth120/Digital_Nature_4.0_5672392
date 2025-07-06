package com.cognizant.orm_learn;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.orm_learn.model.Employee;
import com.cognizant.orm_learn.service.EmployeeService;

@SpringBootApplication
public class OrmLearnEmployeeApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {
        Employee emp = new Employee();
        emp.setName("Alice");
        emp.setDepartment("Finance");

        employeeService.addEmployee(emp);
        System.out.println("Employee inserted successfully");
    }
}
