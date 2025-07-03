package com.library.LibraryManagement;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main{
    public static void main(String[] args) {
        
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the BookService bean
        BookService service = context.getBean("bookService", BookService.class);
        
        // Use it
        service.addBook("Effective Java");
      
    }
}
