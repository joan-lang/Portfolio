import React from "react";

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>

      <p className="projects-subtitle">
        A showcase of clean, modern, responsive websites.
      </p>

      <div className="projects-grid">

        {/* Project 1 */}

        <div className="project-card">
          <img src="" alt="IsokMarket" className="project-image" />

          <h2>IsokMarket</h2>

          <h4>MERN E-commerce Marketplace</h4>

          <p>
            A full-stack marketplace for buying and selling thrift fashion
            items with secure authentication, seller dashboards and role-based
            access control.
          </p>

          <div className="project-buttons">
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="live">Live Website</button>
            </a>

            <a
              href="https://github.com/yourusername/isokmarket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>

        {/* Project 2 */}

        <div className="project-card">
          <img src="" alt="HaleTech" className="project-image" />

          <h2>HaleTech Services</h2>

          <h4>Corporate Website</h4>

          <p>
            Contributed to building responsive frontend components and modern
            user interfaces for a technology company's website.
          </p>

          <div className="project-buttons">
            <a
              href="https://haletech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="live">Live Website</button>
            </a>
          </div>
        </div>

        {/* Project 3 */}

        <div className="project-card">
          <img src="" alt="Portfolio" className="project-image" />

          <h2>Portfolio Website</h2>

          <h4>Personal Portfolio</h4>

          <p>
            A modern portfolio built with React showcasing my projects, skills,
            and experience as a Full Stack Developer.
          </p>

          <div className="project-buttons">
            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="live">Live Website</button>
            </a>

            <a
              href="https://github.com/yourusername/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>

        {/* Project 4 */}

        <div className="project-card">
          <img src="" alt="Okrika Plug" className="project-image" />

          <h2>Okrika Plug</h2>

          <h4>MERN Marketplace</h4>

          <p>
            A marketplace for buying and selling thrift fashion. Currently
            under active development using the MERN stack with secure
            authentication and modern UI.
          </p>

          <div className="project-buttons">
            <button className="coming">Coming Soon</button>

            <a
              href="https://github.com/yourusername/okrika-plug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;