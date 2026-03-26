// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit to backend
    alert('Enquiry sent! We will contact you shortly.');
  };

  return (
    <main className="contact-page">
      <div className="container">
        <div className="section-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our medical tourism experts</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
            <p><i className="fab fa-whatsapp"></i> +91 98765 43211</p>
            <p><i className="fas fa-envelope"></i> care@medicaltourism.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Gurugram, Haryana, India</p>
            <a href="https://wa.me/919876543210" className="btn btn-whatsapp" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            <input type="email" placeholder="Email Address" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
            <textarea rows="5" placeholder="Your Message / Medical Query" value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
            <button type="submit" className="btn btn-primary">Send Enquiry</button>
          </form>
        </div>

        <div className="map-container">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.806084651403!2d77.0819873!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19335b9f8b3f%3A0x8e9e2c1f8e9e2c1f!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1647777777777!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}