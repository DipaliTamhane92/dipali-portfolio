import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <h1>Dipali Tamhane</h1>
      <h2>Frontend Developer</h2>
      <p>
        Frontend Developer with 3+ years of experience building responsive web applications using React, TypeScript, and modern UI practices.
      </p>
      <div className="cta-buttons">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="resume.pdf" className="btn-secondary">Download Resume</a>
      </div>
    </section>
  );
};

export default Hero;