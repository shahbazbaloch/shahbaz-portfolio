import React from "react";

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Shahbaz Ali</h3>
            <p>
              Professional Data Entry Specialist, MS Access & Excel Expert, and
              Graphic Designer helping businesses streamline operations and
              enhance brand identity.
            </p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("portfolio");
                  }}>
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("testimonials");
                  }}>
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Data Entry & Cleaning</a>
              </li>
              <li>
                <a href="#">MS Access Database</a>
              </li>
              <li>
                <a href="#">Excel Automation</a>
              </li>
              <li>
                <a href="#">Logo Design</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">Document Formatting</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li>
                <a href="https://wa.me/03121345027">
                  <i className="fab fa-whatsapp"></i> +92 312 1345027
                </a>
              </li>
              <li>
                <a href="mailto:shahbazali1.work@gmail.com">
                  <i className="fas fa-envelope"></i> shahbazali1.work@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/s/BRLXEZG">
                  <i className="fab fa-fiverr"></i> Fiverr Profile
                </a>
              </li>
              <li>
                <a href="https://www.upwork.com/freelancers/~01cee28b0777dad20a">
                  <i className="fab fa-upwork"></i> Upwork Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Shahbaz Ali. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
