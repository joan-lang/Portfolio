import React from "react";
import Picture from "./assets/picture.jpeg";
import HaleTech from "./assets/haletech.png";
import Portfolio from "./assets/portfolio.png";

const Projects = () => {
  const projects = [
    {
      image: Picture,
      title: "IsokMarket",
      type: "MERN E-commerce Marketplace",
      description:
        "A full-stack marketplace for buying and selling thrift fashion items with secure authentication, seller dashboards, and role-based access control.",
      live: "https://your-live-link.com",
      github: "https://github.com/joan-lang/isOkMarket",
    },
    {
      image: HaleTech,
      title: "HaleTech Services",
      type: "Corporate Website",
      description:
        "Contributed to building responsive frontend components and modern user interfaces for a technology company's website.",
      live: "https://haletech.com",
      github: "",
    },
    {
      image: Portfolio,
      title: "Portfolio Website",
      type: "Personal Portfolio",
      description:
        "A modern portfolio built with React showcasing my projects, technical skills, and experience as a Full Stack Developer.",
      live: "https://yourportfolio.com",
      github: "https://github.com/joan-lang/Portfolio",
    },
  ];

  return (
    <section className="Projects">
      <h1 className="pv">Projects</h1>
      <p className="Show">
        A showcase of clean, modern, responsive websites
      </p>

      <div className="round">
        {projects.map((project, index) => (
          <div className="WEB" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="mk">
              <h2>{project.title}</h2>

              <h4 className="coMM">{project.type}</h4>

              <p className="MODE">{project.description}</p>

              <div className="buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="live">Live Website</button>
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="github">GitHub</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;