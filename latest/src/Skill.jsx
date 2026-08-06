import React from "react";

const Skill = () => {
  return (
    <section className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-subtitle">
        Crafting seamless UI/UX and clean code
      </p>

      <div className="skills-grid">

        <div className="skill-card">
          <h2>Core Skills</h2>

          <div className="skill-tags">
            <span>UI/UX Layout</span>
            <span>Frontend Dev</span>
            <span>Responsive Web Design</span>
            <span>Component-Based Design</span>
          </div>
        </div>

        <div className="skill-card">
          <h2>Frontend Tech</h2>

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>WordPress</span>
          </div>
        </div>

        <div className="skill-card">
          <h2>Design Tools</h2>

          <div className="skill-tags">
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
          </div>
        </div>

        <div className="skill-card">
          <h2>Tools & Interaction</h2>

          <div className="skill-tags">
            <span>GitHub</span>
            <span>Netlify</span>
            <span>GSAP</span>
            <span>UI Interactions</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skill;