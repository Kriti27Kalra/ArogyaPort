// components/Footer.jsx - Updated with all pages
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🏥</span>
              <span className="logo-main">ArogyaPort</span>
            </div>
            <p>India's trusted medical tourism partner. We connect international patients with top hospitals and doctors.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/why-india">Why India</Link></li>
              <li><Link to="/treatments">Treatments</Link></li>
              <li><Link to="/hospitals">Hospitals</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li>Free Medical Consultation</li>
              <li>Visa Assistance</li>
              <li>Airport Transfers</li>
              <li>Luxury Accommodation</li>
              <li>Language Interpreters</li>
              <li>24/7 Patient Support</li>
              <li>Post-Treatment Follow-up</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
            <p><i className="fab fa-whatsapp"></i> +91 98765 43211</p>
            <p><i className="fas fa-envelope"></i> care@medicaltourism.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Gurugram, Haryana, India</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 ArogyaPort – India Medical Tourism. All rights reserved.</p>
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