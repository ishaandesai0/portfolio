import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Ishaan Desai</h1>
        <p>Student</p>
      </header>
      
      <main className="main-content">
        <section className="hero-section">
          <h2>Welcome to My Portfolio</h2>
          <p>I am starting my final Semester at Northeastern, majoring in Computer Engineering and minoring in Business Administration</p>
          <button className="cta-button">View My Work</button>
        </section>
      </main>
    </div>
  );
}

export default App;