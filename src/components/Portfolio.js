import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      icon: "fas fa-database",
      title: "Inventory Management System",
      description:
        "Custom MS Access database for tracking inventory, sales, and suppliers with automated reporting.",
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Automated Invoice System",
      description:
        "Excel-based automated invoice generation with client database integration and payment tracking.",
    },
    {
      icon: "fas fa-utensils",
      title: "Restaurant Menu Design",
      description:
        "Professional menu design for a fine dining restaurant with custom illustrations and layout.",
    },
  ];

  return (
    <section
      className="portfolio"
      id="portfolio">
      <div className="container">
        <div className="section-header fade-in">
          <h2>My Portfolio</h2>
          <p>Check out some of my recent work</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item fade-in">
              <div className="portfolio-img">
                <i className={item.icon}></i>
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio-links">
                  <a
                    href="#"
                    className="portfolio-link">
                    <i className="fas fa-external-link-alt"></i>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h3>Find me on freelancing platforms</h3>
          <div
            className="portfolio-links"
            style={{ justifyContent: "center", marginTop: "20px" }}>
            <a
              href="https://www.fiverr.com/s/BRLXEZG"
              className="btn btn-primary"
              style={{ margin: "0 10px" }}>
              <i className="fab fa-fiverr"></i> Fiverr Profile
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01cee28b0777dad20a"
              className="btn btn-secondary"
              style={{ margin: "0 10px" }}>
              <i className="fab fa-upwork"></i> Upwork Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
