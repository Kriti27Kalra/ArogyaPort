// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit to backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', phone: '', message: '' });
    alert('Enquiry sent! We will contact you shortly.');
  };

  return (
    <main className="contact-page">
      <div className="container">
        {/* Page Header */}
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our medical tourism experts</p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Contact Info Section */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              <i className="fas fa-phone-alt"></i> 
              <a href="tel:+919876543210">+91 98765 43210</a>
            </p>
            <p>
              <i className="fab fa-whatsapp"></i> 
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">+91 98765 43211</a>
            </p>
            <p>
              <i className="fas fa-envelope"></i> 
              <a href="mailto:care@medicaltourism.com">care@medicaltourism.com</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> 
              Gurugram, Haryana, India
            </p>

            {/* Office Hours */}
            <div className="office-hours">
              <h3><i className="fas fa-clock"></i> Office Hours</h3>
              <div className="hours-row">
                <span className="day">Monday - Friday</span>
                <span className="time">9:00 AM - 7:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day">Saturday</span>
                <span className="time">10:00 AM - 5:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="#" className="social-link" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>

            <a href="https://wa.me/919876543210" className="btn-whatsapp" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                Thank you! We'll get back to you soon.
              </div>
            )}
            <div className="form-group">
              <label>Full Name *</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                required 
                value={form.name} 
                onChange={e => setForm({...form, name: e.target.value})} 
              />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                value={form.email} 
                onChange={e => setForm({...form, email: e.target.value})} 
              />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                required 
                value={form.phone} 
                onChange={e => setForm({...form, phone: e.target.value})} 
              />
            </div>
            <div className="form-group">
              <label>Your Message / Medical Query *</label>
              <textarea 
                rows="5" 
                placeholder="Tell us about your medical requirements..." 
                value={form.message} 
                onChange={e => setForm({...form, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> Send Enquiry
            </button>
          </form>
        </div>

        {/* Map Container */}
        <div className="map-container">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.806084651403!2d77.0819873!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19335b9f8b3f%3A0x8e9e2c1f8e9e2c1f!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1647777777777!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Office Location Map"
          ></iframe>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3><i className="fas fa-question-circle"></i> How do I get started?</h3>
              <p>Simply fill out our contact form or call us directly. Our medical tourism expert will reach out within 24 hours.</p>
            </div>
            <div className="faq-item">
              <h3><i className="fas fa-clock"></i> What are the response times?</h3>
              <p>We typically respond to all enquiries within 2-4 hours during business hours.</p>
            </div>
            <div className="faq-item">
              <h3><i className="fas fa-file-medical"></i> Do you provide treatment estimates?</h3>
              <p>Yes, after understanding your medical condition, we provide detailed treatment cost estimates.</p>
            </div>
            <div className="faq-item">
              <h3><i className="fas fa-passport"></i> Do you assist with medical visas?</h3>
              <p>Absolutely! We provide complete assistance with medical visa documentation and invitations.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}