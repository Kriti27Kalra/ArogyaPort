// src/components/UserPanel/Favorites.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserPanel.css';

const sampleFavorites = {
  hospitals: [
    { id: 1, name: 'Max Hospital', location: 'Delhi NCR', rating: 4.8 },
    { id: 2, name: 'Jaypee Hospital', location: 'Noida', rating: 4.7 }
  ],
  doctors: [
    { id: 1, name: 'Dr. Arjun Mehta', specialty: 'Cardiologist', hospital: 'Max Hospital' },
    { id: 2, name: 'Dr. Priya Sharma', specialty: 'Neurologist', hospital: 'Jaypee Hospital' }
  ]
};

export default function Favorites() {
  const [favorites, setFavorites] = useState(sampleFavorites);

  const removeFavorite = (type, id) => {
    setFavorites({
      ...favorites,
      [type]: favorites[type].filter(item => item.id !== id)
    });
  };

  return (
    <div className="favorites-page">
      <h2>My Favorites</h2>

      <div className="favorites-section">
        <h3>Favorite Hospitals</h3>
        {favorites.hospitals.length === 0 ? (
          <div className="empty-state-small">
            <p>No favorite hospitals yet</p>
            <Link to="/hospitals" className="btn btn-sm">Browse Hospitals</Link>
          </div>
        ) : (
          <div className="favorites-grid">
            {favorites.hospitals.map(hospital => (
              <div key={hospital.id} className="favorite-card">
                <div className="favorite-info">
                  <h4>{hospital.name}</h4>
                  <p><i className="fas fa-map-marker-alt"></i> {hospital.location}</p>
                  <div className="rating">⭐ {hospital.rating}</div>
                </div>
                <div className="favorite-actions">
                  <Link to={`/hospitals/${hospital.id}`} className="btn btn-sm">View</Link>
                  <button onClick={() => removeFavorite('hospitals', hospital.id)} className="btn-icon">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="favorites-section">
        <h3>Favorite Doctors</h3>
        {favorites.doctors.length === 0 ? (
          <div className="empty-state-small">
            <p>No favorite doctors yet</p>
            <Link to="/doctors" className="btn btn-sm">Browse Doctors</Link>
          </div>
        ) : (
          <div className="favorites-grid">
            {favorites.doctors.map(doctor => (
              <div key={doctor.id} className="favorite-card">
                <div className="favorite-info">
                  <h4>{doctor.name}</h4>
                  <p>{doctor.specialty}</p>
                  <p className="hospital-name">{doctor.hospital}</p>
                </div>
                <div className="favorite-actions">
                  <Link to={`/doctors/${doctor.id}`} className="btn btn-sm">View</Link>
                  <button onClick={() => removeFavorite('doctors', doctor.id)} className="btn-icon">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}