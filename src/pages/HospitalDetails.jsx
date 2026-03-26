// src/pages/HospitalDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './HospitalDetails.css';

const hospitalsData = {
  'max-hospital': {
    name: 'Max Hospital',
    location: 'Delhi NCR',
    accreditation: 'JCI, NABH',
    established: '2001',
    beds: '500+',
    description: 'Max Hospital is one of India\'s premier healthcare institutions, known for its excellence in cardiac care, neurology, and oncology. With state-of-the-art infrastructure and a team of highly skilled doctors, it has become a preferred destination for international patients.',
    facilities: [
      '24/7 Emergency Services',
      'Advanced Cardiac Cath Lab',
      'Robotic Surgery Suite',
      'International Patient Lounge',
      'Language Interpreters',
      'In-house Pharmacy'
    ],
    doctors: ['Dr. Arjun Mehta', 'Dr. Priya Singh', 'Dr. Rajiv Khanna'],
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Orthopedics']
  },
  'jaypee-hospital': {
    name: 'Jaypee Hospital',
    location: 'Noida',
    accreditation: 'NABH, ISO',
    established: '2014',
    beds: '525+',
    description: 'Jaypee Hospital is a state-of-the-art tertiary care facility that combines advanced medical technology with compassionate care. Known for its excellence in cardiac surgery, orthopedics, and organ transplant.',
    facilities: [
      '24/7 Emergency & Trauma Care',
      'Advanced Imaging Center',
      'Dedicated ICU Units',
      'International Patient Care',
      'Telemedicine Services',
      'Pharmacy & Diagnostic Lab'
    ],
    doctors: ['Dr. Suresh Kumar', 'Dr. Anjali Gupta', 'Dr. Vikram Singh'],
    specialties: ['Cardiology', 'Orthopedics', 'Neurology', 'Organ Transplant']
  }
};

export default function HospitalDetail() {
  const { id } = useParams();
  const hospital = hospitalsData[id];

  if (!hospital) {
    return (
      <div className="hospital-detail-page">
        <div className="container">
          <h1>Hospital not found</h1>
          <Link to="/hospitals" className="btn btn-primary">Back to Hospitals</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="hospital-detail-page">
      <div className="container">
        <Link to="/hospitals" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Hospitals
        </Link>

        <div className="hospital-detail-grid">
          <div className="hospital-main">
            <h1>{hospital.name}</h1>
            <p className="location"><i className="fas fa-map-marker-alt"></i> {hospital.location}</p>
            <p className="accreditation"><i className="fas fa-certificate"></i> {hospital.accreditation}</p>
            
            <div className="hospital-stats">
              <div className="stat">
                <span className="stat-value">{hospital.established}</span>
                <span className="stat-label">Established</span>
              </div>
              <div className="stat">
                <span className="stat-value">{hospital.beds}</span>
                <span className="stat-label">Beds</span>
              </div>
            </div>

            <div className="description">
              <h2>About Hospital</h2>
              <p>{hospital.description}</p>
            </div>

            <div className="facilities">
              <h2>Facilities & Services</h2>
              <ul>
                {hospital.facilities.map((facility, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i>
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hospital-sidebar">
            <div className="sidebar-card">
              <h3>Medical Specialties</h3>
              <ul>
                {hospital.specialties.map((specialty, index) => (
                  <li key={index}>
                    <i className="fas fa-stethoscope"></i>
                    <Link to={`/treatments/${specialty.toLowerCase()}`}>
                      {specialty}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>Top Doctors</h3>
              <ul>
                {hospital.doctors.map((doctor, index) => (
                  <li key={index}>
                    <i className="fas fa-user-md"></i>
                    <Link to={`/doctors/${doctor.toLowerCase().replace(/\s+/g, '-')}`}>
                      {doctor}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card cta-card">
              <h3>Book Appointment</h3>
              <p>Get treatment at {hospital.name}</p>
              <Link to="/enquiry" className="btn btn-primary">Enquire Now</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}