import React from 'react';

function About() {
  return (
    <div className="page-container">
      <h1 className="gradient-text">About Us</h1>
      <p>This is the about page where you can tell people about your project.</p>
      
      <div className="card">
        <h2>How routing works:</h2>
        <p>When you click a link in the Navbar, React Router changes the URL and swaps out this page component without refreshing the browser!</p>
      </div>
    </div>
  );
}

export default About;
