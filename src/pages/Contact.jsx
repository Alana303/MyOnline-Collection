import React, { useEffect } from "react";
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    // Fade-in animation logic
    document.querySelectorAll(".fade-in-up").forEach((el, idx) => {
      el.style.animationDelay = `${(idx + 1) * 0.13}s`;
      el.classList.add("play");
    });
  }, []);

  const scrollToForm = (e) => {
    e.preventDefault();
    const form = document.getElementById("form-area");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const input = document.querySelector(".contact-form input");
        if (input) input.focus();
      }, 700);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-main fade-in-up" style={{ animationDelay: ".3s" }}>
        {/* Left: Contact Details */}
        <div className="contact-left">
          <span className="contact-title">Get In Touch</span>
          <div className="contact-sub">
            <b>Have a project in mind or want to collaborate?</b>
            <br />
            I’d love to hear from you!
          </div>
          <div style={{ fontSize: "1.16rem", color: "#98aad8", fontWeight: 500 }}>
            Let's Connect
          </div>
          <div style={{ fontSize: "1.02rem", margin: "18px 0 12px", color: "#b3c1c9" }}>
            <b>I'm always interested in new opportunities & partnerships — whether freelance
            projects, full-time roles, or innovation chats about technology and development, embracing continuous learning.</b>
          </div>

          <div className="info-list">
            <div className="info-item">
              <i className="fa-solid fa-user"></i> Jeff Fortune Amayo
            </div>
            <div className="info-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:alanaesmeralda045@gmail.com">jeffamayo050@gmail.com</a>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+254112770645">+254 117 527 716</a>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              Nairobi, Kenya
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-right" id="form-area">
          <form className="contact-form" autoComplete="off">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required placeholder="Your full name" />
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required placeholder="your@email.com" />
            <label htmlFor="subject">Subject *</label>
            <input type="text" id="subject" name="subject" required placeholder="What's this about?" />
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about your project or how I can help..."
            ></textarea>
            <button className="btn-send" type="submit">
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section / CTA */}
      <section className="contact-cta fade-in-up" style={{ animationDelay: ".4s" }}>
        <div className="contact-cta-content">
          <h3>Let’s Work Together</h3>
          <p>
            Ready to bring your ideas to life? <br />
            <b>Let's discuss your next project.</b>
          </p>
          {/* 🚫 Removed scroll-to-top button */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
