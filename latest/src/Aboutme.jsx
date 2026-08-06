import React from "react";

const Aboutme = () => {
  return (
    <div className="About">
      <h1 className="ab">About Me</h1>

      <h3 className="be">
       I'm a Full Stack Developer passionate about building modern,
        responsive, and user-friendly web applications. I specialize in
        creating clean front-end experiences with React and developing
        secure, scalable back-end solutions using Node.js, Express, and
        MongoDB.<br />
        <h3 className="bes">I focus on writing clean, maintainable code and building fast,
        responsive applications that provide great user experiences. Every
        project is developed with performance, scalability, and usability in
        mind.</h3>
      </h3>

     <div className="approach-container">
  <h1>My Approach</h1>

  <div className="approach-cards">

    <div className="card">
      <div className="number">01</div>
      <p>Understand users & goals</p>
    </div>

    <div className="card">
      <div className="number">02</div>
      <p>Create clean UI layouts</p>
    </div>

    <div className="card">
      <div className="number">03</div>
      <p>Responsive experiences</p>
    </div>

  </div>
</div>
        

      <div className="plus">
        <div className="fin">
          <h1 className="mo">02+</h1>

          <h4 className="te">Years Of Experience</h4>
        </div>
        <div className="fin">
          <h1 className="mo">4+</h1>

          <h4 className="te">Projects Completed</h4>
        </div>
        <div className="fin">
          <h1 className="mo">03+</h1>

          <h4 className="te">Clients Served</h4>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
