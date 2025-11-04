import React from "react";

const About = () => {
  const skills = [
    "Data Entry",
    "Data Cleaning",
    "MS Access",
    "Excel Automation",
    "Logo Design",
    "Graphic Design",
    "Auto Invoices",
    "Document Formatting",
  ];

  return (
    <section
      className="about"
      id="about">
      <div className="container">
        <div className="section-header fade-in">
          <h2>About Me</h2>
          <p>Learn more about my skills and experience</p>
        </div>
        <div className="about-content fade-in">
          <div className="about-image">
            <div className="profile-img">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className="about-text">
            <h3>Professional Data & Design Specialist</h3>
            <p>
              I'm a dedicated freelancer with hands-on experience in Data Entry,
              MS Access Database Design, Excel Automation, Logo Design, and Auto
              Invoice Templates. My goal is to help clients manage their data
              efficiently and build a strong visual identity for their business.
            </p>
            <p>
              With a keen eye for detail and a passion for creating efficient
              systems, I deliver high-quality work that exceeds client
              expectations. I believe in building long-term relationships with
              my clients by providing reliable and professional services.
            </p>
            <div className="skills">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
