import React, { useState } from "react";

const Header = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            Shahbaz <span>Ali</span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
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
            <li>
              <a
                href="#login"
                onClick={(e) => {
                  e.preventDefault();
                  onLoginClick();
                  setIsMenuOpen(false);
                }}>
                Login
              </a>
            </li>
          </ul>
          <button
            className="mobile-menu"
            onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
