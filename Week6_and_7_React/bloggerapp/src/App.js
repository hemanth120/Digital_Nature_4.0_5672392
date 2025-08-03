
import React from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';
import { books } from './data/books';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box mystyle1">
          <h1>Course Details</h1>
          <CourseDetails />
        </div>

        <div className="box st2">
          <h1>Book Details</h1>
          <BookDetails books={books} />
        </div>

        <div className="box v1">
          <h1>Blog Details</h1>
          <BlogDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
