import React, { useEffect, useState } from "react";
import "../App.css";

const navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavVisible, setisNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let lastScrollTop = 0;
    let isScrollActive = false;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      setScrolled(currentScroll > 50);
      setisNavVisible(currentScroll <= lastScrollTop);
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && !isNavVisible) {
        window.addEventListener("scroll", handleScroll);
        isScrollActive = true;
      } else {
        window.addEventListener("scroll", handleScroll);
        isScrollActive = true;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""}${isNavVisible ? "nav-visible" : "nav-hidden"}`}
    >
      <nav className="nav-main">
        <div className="nav-logo">
          {/* <img src="" alt="Logo" /> */}
          <h3>A.J</h3>
        </div>

        <ul className="nav-menu">
          <a href="#home" className="Link">
            <li className={activeSection === "home" ? "active" : ""}>Home</li>
          </a>

          <a href="#services" className="Link">
            <li className={activeSection === "services" ? "active" : ""}>
              Services
            </li>
          </a>

          <a href="#about" className="Link">
            <li className={activeSection === "about" ? "active" : ""}>About</li>
          </a>

          <a href="#skills" className="Link">
            <li className={activeSection === "skills" ? "active" : ""}>
              Skill
            </li>
          </a>

          <a href="#projects" className="Link">
            <li className={activeSection === "projects" ? "active" : ""}>
              Project
            </li>
          </a>
        </ul>

        <div className="nav-button">
          <button className="btn">Let's talk</button>
          <i></i>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
