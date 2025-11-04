import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    deadline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      service: "",
      budget: "",
      deadline: "",
      message: "",
    });
  };

  return (
    <section
      className="contact"
      id="contact">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Get In Touch</h2>
          <p>Let's discuss your project requirements</p>
        </div>
        <div className="contact-content">
          <div className="contact-info fade-in">
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out to me for any inquiries or project
              discussions. I typically respond within a few hours.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/03121345027">+92 312 1345027</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:shahbazali1.work@gmail.com">
                    shahbazali1.work@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Available for remote work worldwide</p>
                </div>
              </div>
            </div>
            <h4>Follow me on</h4>
            <div className="social-links">
              <a
                href="https://www.fiverr.com/s/BRLXEZG"
                className="social-link">
                <i className="fab fa-fiverr"></i>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01cee28b0777dad20a"
                className="social-link">
                <i className="fab fa-upwork"></i>
              </a>
              <a
                href="#"
                className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="contact-form fade-in">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="data-entry">Data Entry & Cleaning</option>
                  <option value="database">MS Access Database</option>
                  <option value="excel">Excel Automation</option>
                  <option value="design">Logo & Graphic Design</option>
                  <option value="formatting">Document Formatting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Project Budget (USD)</label>
                <select
                  id="budget"
                  name="budget"
                  className="form-control"
                  value={formData.budget}
                  onChange={handleChange}>
                  <option value="">Select budget range</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-250">$100 - $250</option>
                  <option value="250-500">$250 - $500</option>
                  <option value="500+">$500+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="deadline">Project Deadline</label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  className="form-control"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
