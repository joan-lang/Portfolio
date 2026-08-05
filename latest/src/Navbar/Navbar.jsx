import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../App.css';


const navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isNavVisible, setisNavVisible] = useState(false)
  const location = useLocation();

  useEffect(() => {
    let lastScrollTop = 0;
    let isScrollActive = false;

    const handleScroll = () => {
      const currentScroll = window.YOffset;;

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
      window.removeEventListener("scroll", handleResize);
      window.removeEventListener("resize", handleResize);
    };

    
  }, [])

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
          <Link to="/" className="Link">
            <li className={location.pathname === "/" ? "active" : ""}>
            Home</li>
          </Link>
          <Link to="/about" className="Link">
            <li className={location.pathname === "/about" ? "active" : ""}>
              Services
            </li>
          </Link>
          <Link to="/Resources" className="Link">
            <li className={location.pathname === "/resources" ? "active" : ""}>
              About
            </li>
          </Link>
          <Link to="/contact" className="Link">
            <li className={location.pathname === "/contact" ? "active" : ""}>
              Skill
            </li>
          </Link>
          <Link to="/events" className="Link">
            <li className={location.pathname === "/events" ? "active" : ""}>
              Project
            </li>
          </Link>

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
