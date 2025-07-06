package com.library.management;

public class BookService {
    private BookRepository bookRepository;

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook() {
        bookRepository.saveBook();
    }
}
