import React from "react";

const Aboutme = () => {
  return (
    <div className="About">
      <h1 className="ab">About Me</h1>

      <h3 className="be">
        I’m a front-end developer and designer passionate about crafting clean,
        intuitive, and responsive digital experiences. I focus on turning ideas
        into <br />
        <h3 className="bes">seamless interfaces by understanding user needs, designing
        thoughtful UI layouts, and ensuring smooth interactions across devices.</h3>
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
          <h1 className="mo">15+</h1>

          <h4 className="te">Projects Completed</h4>
        </div>
        <div className="fin">
          <h1 className="mo">05+</h1>

          <h4 className="te">Clients Served</h4>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
