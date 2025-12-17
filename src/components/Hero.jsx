import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 id="hero-title">
            Hello, I am Jeff Amayo – <br/> A FrontEnd Web Developer <br/>Crafting Dynamic <br/>& Interactive Web <br/>Experiences!
          </h1>
          <p>
            As a <b>junior self taught frontend web developer,</b> I bring designs to life through my growing knowledge of modern frameworks. I focus on creating responsive, interactive layouts that feel intuitive, engaging, and visually appealing.
          </p>
          <a href="/projects" className="cta-btn">View My Work</a>
          <a href="/files/JEFF FORTUNE AMAYO CV RELOADED.pdf" download className="cta-btn">Download My Resume</a>
          <div className="social-links">
            <a href="mailto:jeffamayo050@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
            <a href="https://linkedin.com/in/jeffamayo" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Alana303" target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/Romeo1.png" alt="Jeff Amayo" />
        </div>
      </div>
    </section>
  );
}
