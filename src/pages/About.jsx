// pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <main className="about-page">
      <div className="container">
        <div className="section-header">
          <h1>About ArogyaPort</h1>
          <p>India's Most Trusted Medical Tourism Facilitator</p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h2>Your Health, Our Priority</h2>
              <p>
                ArogyaPort India Medical Tourism is a premier healthcare facilitation company dedicated 
                to connecting international patients with world-class medical facilities in India. With 
                over 15 years of experience in the healthcare industry, we have helped thousands of 
                patients from 85+ countries receive quality medical care at affordable costs.
              </p>
              <p>
                Our mission is to make world-class healthcare accessible to everyone. We believe that 
                quality medical treatment should not be a luxury, and India offers the perfect combination 
                of advanced medical technology, highly skilled doctors, and cost-effective care.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number">25,000+</span>
                  <span className="stat-label">Happy Patients</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number">85+</span>
                  <span className="stat-label">Countries Served</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop" alt="Medical Team" />
            </div>
          </div>

          <div className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <i className="fas fa-heartbeat"></i>
                <h3>Patient First</h3>
                <p>We prioritize patient well-being and satisfaction above everything else.</p>
              </div>
              <div className="value-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Trust & Transparency</h3>
                <p>Complete transparency in pricing, treatment options, and procedures.</p>
              </div>
              <div className="value-card">
                <i className="fas fa-globe"></i>
                <h3>Global Standards</h3>
                <p>Partnering only with JCI/NABH accredited hospitals and certified doctors.</p>
              </div>
              <div className="value-card">
                <i className="fas fa-hand-holding-heart"></i>
                <h3>Compassionate Care</h3>
                <p>Personalized attention and emotional support throughout your journey.</p>
              </div>
            </div>
          </div>

          <div className="certifications">
            <h2>Accreditations & Certifications</h2>
            <div className="cert-grid">
              <div className="cert-item">JCI Accredited Partner</div>
              <div className="cert-item">NABH Certified</div>
              <div className="cert-item">ISO 9001:2025</div>
              <div className="cert-item">Medical Tourism Association Member</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}