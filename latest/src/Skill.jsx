import React from "react";

const Skill = () => {
  return (
    <section className="skill">
      <h1 className="mySkill">Skills</h1>
      <p className="Sub">Crafting seamless UI/UX and clean code</p>

      <div className="Coreskills">

        {/* Core Skills */}
        <div className="card">
          <h2>Core Skills</h2>

          <div className="tags">
            <span>UI/UX Layout</span>
            <span>Frontend Dev</span>
            <span>Responsive Web Design</span>
            <span>Component-Based Design</span>
          </div>
        </div>

        {/* Frontend Tech */}
        <div className="card">
          <h2>Frontend Tech</h2>

          <div className="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>WordPress</span>
          </div>
        </div>

        {/* Design Tools */}
        <div className="card">
          <h2>Design Tools</h2>

          <div className="tags">
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
          </div>
        </div>

        {/* Tools & Interaction */}
        <div className="card">
          <h2>Tools & Interaction</h2>

          <div className="tags">
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