// Packages.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

const packages = [
  { name: 'Complete Health Checkup', price: 499, includes: ['50+ Tests', 'Doctor Consult', '3 Nights Hotel', 'Airport Transfer'], featured: true },
  { name: 'Knee Replacement', price: 5500, includes: ['Surgery & Hospital Stay', '10 Days Physio', '7 Nights Hotel', 'Airport Transfer'] },
  { name: 'Cardiac Bypass', price: 6800, includes: ['Surgery & ICU', 'Pre-op Consult', '10 Nights Hotel', 'Airport Transfer'] },
];

export default function Packages() {
  return (
    <main className="packages-page">
      <div className="container">
        <div className="section-header">
          <h1>Treatment Packages</h1>
          <p>All‑inclusive medical travel packages with accommodation & transfers</p>
        </div>
        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <div key={i} className={`package-card ${pkg.featured ? 'featured' : ''}`}>
              {pkg.featured && <div className="popular-badge">Most Popular</div>}
              <h3>{pkg.name}</h3>
              <div className="price">${pkg.price} <span>/ package</span></div>
              <ul>
                {pkg.includes.map((item, idx) => (
                  <li key={idx}><i className="fas fa-check-circle"></i> {item}</li>
                ))}
              </ul>
              <Link to="/enquiry" className="btn btn-primary">Book Package</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}