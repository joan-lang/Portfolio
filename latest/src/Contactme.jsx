import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact-title">Let's Work Together</h1>

      <p className="contact-subtitle">
        Have a project in mind or want to collaborate? I'd love to hear from you.
      </p>

      <div className="contact-info">

        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:anitaodianosen74@gmail.com">
            anitaodianosen74@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <a href="tel:+2349156252450">
            +234 915 625 2450
          </a>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/joan-lang"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/joan-lang
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;