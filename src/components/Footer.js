import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🩺</span>
              <div className="logo-text">
                <span className="logo-main">Arogyaport</span>
                <span className="logo-sub">India International Pvt. Ltd.</span>
              </div>
            </div>
            <p className="brand-description">
              India's trusted medical tourism facilitator, connecting international patients 
              with world-class healthcare institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/treatments">Treatments</Link></li>
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/international-patients">International Patients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-whatsapp"></i>
              <span>+91 98765 43211</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>care@arogyaport.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Gurugram, India</span>
            </div>
          </div>

          {/* Social */}
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} Arogyaport India International Pvt. Ltd. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}