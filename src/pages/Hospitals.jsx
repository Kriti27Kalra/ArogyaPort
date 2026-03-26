// Hospitals.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hospitals.css';

const hospitalsData = [
  { id: 1, name: 'Max Hospital', city: 'Delhi', specialty: 'Multi‑specialty', accreditation: 'JCI, NABH', rating: 4.8, image: '🏥' },
  { id: 2, name: 'Jaypee Hospital', city: 'Noida', specialty: 'Cardiac, Ortho', accreditation: 'NABH', rating: 4.7, image: '🏥' },
  { id: 3, name: 'Fortis Escorts', city: 'Delhi', specialty: 'Cardiac, Neurology', accreditation: 'JCI', rating: 4.9, image: '🏥' },
  { id: 4, name: 'BLK Hospital', city: 'Delhi', specialty: 'Oncology, Transplant', accreditation: 'NABH', rating: 4.8, image: '🏥' },
];

export default function Hospitals() {
  const [filters, setFilters] = useState({ city: '', specialty: '' });

  const filtered = hospitalsData.filter(h => 
    (filters.city === '' || h.city === filters.city) &&
    (filters.specialty === '' || h.specialty.includes(filters.specialty))
  );

  const cities = [...new Set(hospitalsData.map(h => h.city))];
  const specialties = [...new Set(hospitalsData.flatMap(h => h.specialty.split(', ')))];

  return (
    <main className="hospitals-page">
      <div className="container">
        <div className="section-header">
          <h1>Top Hospitals in India</h1>
          <p>Choose from India’s most trusted healthcare institutions</p>
        </div>

        <div className="filters-bar">
          <select onChange={e => setFilters({...filters, city: e.target.value})}>
            <option value="">All Cities</option>
            {cities.map(c => <option key={c}>{c}</option>)}
          </select>
          <select onChange={e => setFilters({...filters, specialty: e.target.value})}>
            <option value="">All Specialties</option>
            {specialties.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div className="hospitals-grid">
          {filtered.map(h => (
            <div key={h.id} className="hospital-card">
              <div className="hospital-image">{h.image}</div>
              <div className="hospital-info">
                <h3>{h.name}</h3>
                <p className="location"><i className="fas fa-map-marker-alt"></i> {h.city}</p>
                <p className="specialty">{h.specialty}</p>
                <p className="accreditation">{h.accreditation}</p>
                <div className="rating">⭐ {h.rating}</div>
                <Link to={`/hospitals/${h.id}`} className="btn btn-outline">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}