import React, { useEffect, useState } from "react";
import "../App.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Navbar scroll effect
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      setScrolled(currentScroll > 50);
      setIsNavVisible(currentScroll <= lastScrollTop);

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect active section
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
      className={`header ${scrolled ? "scrolled" : ""} ${
        isNavVisible ? "nav-visible" : "nav-hidden"
      }`}
    >
      <nav className="nav-main">
        <div className="nav-logo">
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
              Skills
            </li>
          </a>

          <a href="#projects" className="Link">
            <li className={activeSection === "projects" ? "active" : ""}>
              Projects
            </li>
          </a>
        </ul>

        <div className="nav-button">
          <a href="#contact">
            <button className="btn">Let's Talk</button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
