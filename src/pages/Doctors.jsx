// Doctors.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css';

const doctorsData = [
  { id: 1, name: 'Dr. Arjun Mehta', specialty: 'Cardiologist', experience: '24 years', hospital: 'Max Hospital', qualification: 'MBBS, MS, MCh', rating: 4.9 },
  { id: 2, name: 'Dr. Priya Sharma', specialty: 'Neurologist', experience: '18 years', hospital: 'Jaypee Hospital', qualification: 'MBBS, MD, DM', rating: 4.8 },
  { id: 3, name: 'Dr. Rajiv Khanna', specialty: 'Orthopedic Surgeon', experience: '22 years', hospital: 'Fortis Escorts', qualification: 'MBBS, MS', rating: 4.9 },
];

export default function Doctors() {
  return (
    <main className="doctors-page">
      <div className="container">
        <div className="section-header">
          <h1>Our Top Doctors</h1>
          <p>Internationally trained specialists with proven success rates</p>
        </div>
        <div className="doctors-grid">
          {doctorsData.map(d => (
            <div key={d.id} className="doctor-card">
              <div className="doctor-avatar">👨‍⚕️</div>
              <h3>{d.name}</h3>
              <p className="specialty">{d.specialty}</p>
              <p className="qualification">{d.qualification}</p>
              <p className="experience"><i className="fas fa-clock"></i> {d.experience}</p>
              <p className="hospital"><i className="fas fa-hospital"></i> {d.hospital}</p>
              <div className="rating">⭐ {d.rating}</div>
              <Link to={`/doctors/${d.id}`} className="btn btn-outline">View Profile</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}