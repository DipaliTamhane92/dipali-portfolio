import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Vue.js (2 & 3)</li>
            <li>JavaScript / TypeScript</li>
            <li>HTML5, CSS3, Responsive Design</li>
          </ul>
        </div>

        <div>
          <h3>Tools & Platforms</h3>
          <ul>
            <li>Git, GitLab</li>
            <li>REST APIs</li>
            <li>CI/CD basics</li>
            <li>Docker (basic)</li>
            <li>Linux</li>
          </ul>
        </div>

        <div>
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;