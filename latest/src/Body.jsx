import React from "react";
import Mainbody from "./Mainbody";
import Secondbody from "./Secondbody";
import Aboutme from "./Aboutme";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contactme";

const Body = () => {
  return (
    <main className="container">
      <section id="home">
        <Mainbody />
      </section>

      <section id="services">
        <Secondbody />
      </section>

      <section id="about">
        <Aboutme />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Body;