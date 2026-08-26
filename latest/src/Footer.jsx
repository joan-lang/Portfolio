import React from "react";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-logo">
        ©
      </div>

      <h3>Anita Odianosen</h3>

      <p>Full Stack Developer</p>

      <div className="footer-links">
        <a
          href="https://github.com/joan-lang"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <span>•</span>

        <a href="mailto:anitaodianosen74@gmail.com">
          Email
        </a>
      </div>

      <div className="footer-line"></div>

      <small>
        © {new Date().getFullYear()} Anita Odianosen. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;