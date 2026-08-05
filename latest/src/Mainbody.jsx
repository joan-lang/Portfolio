import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Picture from "./assets/picture.jpeg";

export const Mainbody = () => {
  return (
    <div className="Firstpage">
      <div className="top">
        <h2 className="name">I am Joan</h2>
        <h1 className="front">Front-End</h1>
        <h1 className="fr">Developer & Designer</h1>
        <p className="down">
         Blending thoughtful UI design with clean, responsive development to create websites that look great and perform flawlessly.
        </p>
        <button className="cv">Download CV</button>

        <div className="socials">
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedinIn />
          </a>

          <a href="https://github.com" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="hero">
       <img src={Picture} alt="Joan" />
      </div>
    </div>
  );
};

export default Mainbody