import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I am a frontend developer with over 5 years of professional experience
        building responsive and user-focused web applications. I have worked
        extensively with React, Vue.js, and TypeScript to deliver clean,
        maintainable UI components.
      </p>
      <p>
        I enjoy collaborating with cross-functional teams, translating business
        requirements into intuitive interfaces, and continuously improving
        performance, accessibility, and user experience.
      </p>
    </section>
  );
};

export default About;