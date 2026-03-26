// Treatments.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Treatments.css';

const treatmentCategories = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: '❤️',
    description: 'Heart bypass, angioplasty, valve replacement',
    cost: '$4,500 – $8,000',
    recovery: '2–4 weeks',
    hospitals: ['Max Hospital', 'Fortis Escorts', 'Artemis'],
    doctors: ['Dr. Arjun Mehta', 'Dr. Suresh Kumar']
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: '🦴',
    description: 'Knee/hip replacement, spine surgery, sports medicine',
    cost: '$5,000 – $9,000',
    recovery: '4–6 weeks',
    hospitals: ['Jaypee Hospital', 'BLK Hospital'],
    doctors: ['Dr. Rajiv Sharma', 'Dr. Anjali Gupta']
  },
  {
    id: 'oncology',
    name: 'Oncology',
    icon: '🎗️',
    description: 'Cancer care, chemotherapy, radiation therapy',
    cost: '$6,000 – $12,000',
    recovery: 'Varies',
    hospitals: ['BLK Hospital', 'Max Hospital'],
    doctors: ['Dr. Vinod Raina', 'Dr. Harit Chaturvedi']
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic Surgery',
    icon: '✨',
    description: 'Rhinoplasty, liposuction, hair transplant',
    cost: '$2,500 – $6,000',
    recovery: '1–3 weeks',
    hospitals: ['Artemis Hospital', 'Jaypee Hospital'],
    doctors: ['Dr. Deepa Sharma', 'Dr. Rakesh Sinha']
  }
];

export default function Treatments() {
  const [selected, setSelected] = useState(treatmentCategories[0]);

  return (
    <main className="treatments-page">
      <div className="container">
        <div className="section-header">
          <h1>Treatments in India</h1>
          <p>World‑class medical procedures at affordable costs</p>
        </div>

        <div className="treatments-layout">
          <div className="treatments-sidebar">
            {treatmentCategories.map(t => (
              <button
                key={t.id}
                className={`category-btn ${selected.id === t.id ? 'active' : ''}`}
                onClick={() => setSelected(t)}
              >
                <span>{t.icon}</span> {t.name}
              </button>
            ))}
          </div>

          <div className="treatment-detail">
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
            <div className="info-grid">
              <div className="info-card">
                <i className="fas fa-dollar-sign"></i>
                <strong>Cost Estimate</strong>
                <span>{selected.cost}</span>
              </div>
              <div className="info-card">
                <i className="fas fa-clock"></i>
                <strong>Recovery Time</strong>
                <span>{selected.recovery}</span>
              </div>
            </div>

            <div className="recommended">
              <h3>Recommended Hospitals</h3>
              <div className="hospital-list">
                {selected.hospitals.map(h => (
                  <Link key={h} to={`/hospitals/${h.toLowerCase().replace(/\s+/g, '-')}`} className="hospital-chip">
                    {h}
                  </Link>
                ))}
              </div>

              <h3>Top Doctors</h3>
              <div className="doctor-list">
                {selected.doctors.map(d => (
                  <Link key={d} to={`/doctors/${d.toLowerCase().replace(/\s+/g, '-')}`} className="doctor-chip">
                    {d}
                  </Link>
                ))}
              </div>
            </div>

            <div className="cta-row">
              <Link to="/enquiry" className="btn btn-primary">Get Free Consultation</Link>
              <a href="https://wa.me/919876543210" className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}