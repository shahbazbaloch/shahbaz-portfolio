import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import WhatsAppWidget from "./components/WhatsAppWidget";
import "./styles/App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Scroll animation functionality
    const fadeElements = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = () => {
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", fadeInOnScroll);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Header onLoginClick={openModal} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <LoginModal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
