// pages/WhyIndia.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './WhyIndia.css';

export default function WhyIndia() {
  return (
    <main className="why-india-page">
      <div className="container">
        <div className="section-header">
          <h1>Why Choose India for Medical Treatment?</h1>
          <p>India: The World's Leading Medical Tourism Destination</p>
        </div>

        <div className="reasons-full">
          <div className="reason-block">
            <div className="reason-icon">💰</div>
            <div className="reason-content">
              <h2>Affordable World-Class Healthcare</h2>
              <p>Medical treatments in India cost 60-80% less than in Western countries without compromising on quality. A heart bypass that costs $100,000+ in the US can be done for $6,000-8,000 in India. This affordability extends to all medical procedures including transplants, orthopedic surgeries, and cancer treatments.</p>
            </div>
          </div>

          <div className="reason-block reverse">
            <div className="reason-icon">🏥</div>
            <div className="reason-content">
              <h2>JCI & NABH Accredited Hospitals</h2>
              <p>India has numerous JCI (Joint Commission International) and NABH (National Accreditation Board for Hospitals) accredited hospitals that meet global standards. These hospitals feature state-of-the-art infrastructure, advanced medical equipment, and follow international protocols for patient safety and care.</p>
            </div>
          </div>

          <div className="reason-block">
            <div className="reason-icon">👨‍⚕️</div>
            <div className="reason-content">
              <h2>Highly Skilled English-Speaking Doctors</h2>
              <p>Indian doctors are globally recognized for their expertise. Many have trained in the US, UK, and Europe. They are fluent in English and communicate effectively with international patients. India produces some of the world's finest medical professionals who are known for their skill, compassion, and dedication.</p>
            </div>
          </div>

          <div className="reason-block reverse">
            <div className="reason-icon">⏰</div>
            <div className="reason-content">
              <h2>No Waiting Time for Surgeries</h2>
              <p>Unlike many Western countries where patients wait months for surgeries, India offers immediate treatment. You can schedule your surgery within days of arrival. This is particularly crucial for time-sensitive conditions like cancer or cardiac issues where early intervention is critical.</p>
            </div>
          </div>

          <div className="reason-block">
            <div className="reason-icon">🛂</div>
            <div className="reason-content">
              <h2>Easy Medical Visa Process</h2>
              <p>India offers a streamlined medical visa process. We provide a free visa invitation letter from the hospital, making your visa application smooth and quick. Medical visas can be obtained within 3-5 working days, and attendants can accompany patients with medical attendant visas.</p>
            </div>
          </div>

          <div className="reason-block reverse">
            <div className="reason-icon">🌏</div>
            <div className="reason-content">
              <h2>Combine Treatment with Tourism</h2>
              <p>India offers a unique opportunity to combine your medical journey with tourism. From the Taj Mahal to Kerala's backwaters, from Himalayan mountains to Goa's beaches, you can recover while experiencing India's rich cultural heritage and natural beauty.</p>
            </div>
          </div>
        </div>

        <div className="cta-banner">
          <h3>Ready to Begin Your Medical Journey in India?</h3>
          <p>Get a free consultation with our medical experts today</p>
          <Link to="/enquiry" className="btn btn-primary btn-large">Get Free Consultation</Link>
        </div>
      </div>
    </main>
  );
}