import React from 'react';

function Home() {
  return (
    <div className="page-container">
      <h1 className="gradient-text">Welcome Home!</h1>
      <p>This is your beautiful new home page.</p>
      
      <div className="card">
        <h2>Beginner Tip:</h2>
        <p>A "Page" in React is just a regular component! We put it in a "pages" folder just to keep things organized.</p>
      </div>
    </div>
  );
}

export default Home;
