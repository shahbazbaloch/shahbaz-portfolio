import React from "react";

const Services = () => {
  const services = [
    {
      icon: "fas fa-database",
      title: "Data Entry & Data Cleaning",
      description:
        "Accurate and efficient data entry services with thorough cleaning and validation to ensure data integrity.",
    },
    {
      icon: "fas fa-server",
      title: "MS Access Database Development",
      description:
        "Custom database solutions designed to streamline your business operations and improve data management.",
    },
    {
      icon: "fas fa-file-excel",
      title: "Excel Automation & Auto Invoices",
      description:
        "Automated Excel solutions and custom invoice templates to save time and reduce manual errors.",
    },
    {
      icon: "fas fa-palette",
      title: "Logo & Menu Design",
      description:
        "Creative and professional logo designs and menu layouts that reflect your brand identity.",
    },
    {
      icon: "fas fa-file-alt",
      title: "Document Formatting",
      description:
        "Professional formatting for MS Word and Excel documents to ensure consistency and readability.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Data Analysis & Reporting",
      description:
        "Transform your raw data into actionable insights with comprehensive analysis and reporting.",
    },
  ];

  return (
    <section
      className="services"
      id="services">
      <div className="container">
        <div className="section-header fade-in">
          <h2>My Services</h2>
          <p>Comprehensive solutions for your business needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card fade-in">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
