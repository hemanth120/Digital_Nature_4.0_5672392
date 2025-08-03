
import React from 'react';

const BlogDetails = () => {
  const showInstall = true; 

  return (
    <div>
      <h2>React Learning</h2>
      <h4><i>Stephen Biz</i></h4>
      <p>Welcome to learning React!</p>

      {showInstall && (
        <>
          <h2>Installation</h2>
          <h4><i>Schwezdenier</i></h4>
          <p>You can install React from npm.</p>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
