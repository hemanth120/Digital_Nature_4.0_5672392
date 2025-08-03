
import React from 'react';

const CourseDetails = () => {
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/20201' }, // Typo intentional to match your image
  ];

  return (
    <div>
      {courses.length > 0 ? (
        courses.map((course, index) => (
          <div key={index}>
            <h2>{course.name}</h2>
            <h4>{course.date}</h4>
          </div>
        ))
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
};

export default CourseDetails;
