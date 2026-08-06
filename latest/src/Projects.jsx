import React from "react";
import Logo from "./assets/my logo.png";
import HaleTech from "./assets/HaleTech pic.png";
import Portfolio from "./assets/Portfolio Pic.png";

const Projects = () => {
  const projects = [
    {
      image: Logo,
      title: "IsokMarket",
      type: "MERN E-commerce Marketplace",
      description:
        "A full-stack marketplace for buying and selling thrift fashion items with secure authentication, seller dashboards, and role-based access.",
      comingSoon: true,
    },

    {
      image: HaleTech,
      title: "HaleTech Services",
      type: "Corporate Website",
      description:
        "Contributed to building responsive front-end components for a modern technology company's website.",
      comingSoon: false,
    },

    {
      image: Portfolio,
      title: "Portfolio Website",
      type: "Personal Portfolio",
      description:
        "A modern React portfolio showcasing my projects, technical skills, and experience as a Full Stack Developer.",
      comingSoon: false,
    },
  ];

  return (
    <section className="Projects">
      <h1 className="pv">Projects</h1>

      <p className="Show">
        A showcase of clean, modern, responsive websites.
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

              {project.comingSoon ? (
                <button className="comingSoon" disabled>
                  Coming Soon
                </button>
              ) : (
                <button className="viewProject">
                  View Project
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;