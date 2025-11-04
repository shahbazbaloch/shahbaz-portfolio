import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Excellent work — fast, professional, and accurate! Shahbaz delivered exactly what I needed ahead of schedule. Highly recommended for data entry and automation tasks.",
      name: "John Doe",
      position: "Small Business Owner",
      initials: "JD",
    },
    {
      text: "Shahbaz created a custom database for my business that has saved me countless hours. His attention to detail and understanding of my needs was impressive. Will definitely work with him again!",
      name: "Sarah Johnson",
      position: "Retail Store Manager",
      initials: "SJ",
    },
    {
      text: "The logo design exceeded my expectations! Shahbaz captured exactly what I wanted for my brand. Professional, creative, and great communication throughout the project.",
      name: "Michael Roberts",
      position: "Startup Founder",
      initials: "MR",
    },
  ];

  return (
    <section
      className="testimonials"
      id="testimonials">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Client Testimonials</h2>
          <p>What my clients say about my work</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card fade-in">
              <div className="testimonial-text">{testimonial.text}</div>
              <div className="client-info">
                <div className="client-avatar">{testimonial.initials}</div>
                <div className="client-details">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
