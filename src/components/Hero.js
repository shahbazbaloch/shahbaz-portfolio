import React from "react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="hero"
      id="home">
      <div className="container">
        <div className="hero-content fade-in">
          <h1>Transforming Data & Design Into Digital Success</h1>
          <p>
            Hi, I'm Shahbaz Ali — a professional freelancer helping businesses
            streamline data systems and elevate their brand identity through
            clean, automated, and visually appealing solutions.
          </p>
          <div className="hero-buttons">
            <a
              href="https://www.fiverr.com/s/BRLXEZG"
              className="btn btn-accent">
              Hire Me on Fiverr
            </a>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("contact")}>
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
