import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useReveal from './useReveal';

function App() {
  useReveal();

  return (
    <div className="App">
      <Navbar />

      <header className="header" id="home">
        <h1>Ishaan Desai</h1>
        <p>Computer Engineer — Systems, ML, and High-Performance Computing</p>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h2>Welcome to My Portfolio</h2>
          <p>I'm pursuing an MS in Electrical and Computer Engineering at Northeastern, focused on machine learning, computer vision, and algorithms.</p>
          <a className="cta-button" href="#projects">View My Work</a>
        </section>

        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
