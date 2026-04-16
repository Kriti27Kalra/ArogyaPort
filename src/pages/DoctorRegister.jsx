// src/pages/DoctorRegister.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Auth.css';

export default function DoctorRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: '',
    specialization: '',
    qualification: '',
    experience: '',
    licenseNumber: '',
    hospitalAffiliation: '',
    consultationFee: '',
    availableDays: '',
    availableTime: '',
    bio: '',
    profileImage: null
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setError('');
    setLoading(true);

    try {
      const newDoctor = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        userType: 'doctor',
        role: 'doctor',
        registeredAt: new Date().toISOString(),
        specialization: formData.specialization,
        qualification: formData.qualification,
        experience: formData.experience,
        licenseNumber: formData.licenseNumber,
        hospitalAffiliation: formData.hospitalAffiliation,
        consultationFee: formData.consultationFee,
        availableDays: formData.availableDays,
        availableTime: formData.availableTime,
        bio: formData.bio,
        isVerified: false,
        rating: 0,
        totalPatients: 0,
        totalAppointments: 0
      };
      
      register(newDoctor);
      navigate('/doctor-dashboard');
    } catch (err) {
      setError('Failed to create account. Please try again.');
    }
    setLoading(false);
  };

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 
    'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain',
    'South Africa', 'Nigeria', 'Kenya', 'Ethiopia', 'Egypt',
    'Russia', 'Germany', 'France', 'Italy', 'Spain', 'India'
  ];

  const specializations = [
    'Cardiologist', 'Neurologist', 'Orthopedic Surgeon', 'Oncologist', 
    'Pediatrician', 'Gynecologist', 'Dermatologist', 'Ophthalmologist',
    'ENT Specialist', 'Urologist', 'Psychiatrist', 'Radiologist',
    'Anesthesiologist', 'General Surgeon', 'Plastic Surgeon', 'Transplant Surgeon'
  ];

  const qualifications = [
    'MBBS, MD', 'MBBS, MS', 'MBBS, DM', 'MBBS, MCh',
    'MBBS, DNB', 'MBBS, FRCS', 'MBBS, MRCP', 'PhD in Medicine'
  ];

  const experienceYears = Array.from({ length: 40 }, (_, i) => i + 1);

  return (
    <div className="auth-page doctor-register-page">
      <div className="container">
        <div className="auth-card">
          <div className="doctor-register-header">
            <i className="fas fa-user-md"></i>
            <h2>Doctor Registration</h2>
            <p>Join our network of medical experts</p>
          </div>
          
          {error && <div className="alert alert-error">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="form-section-title">
              <i className="fas fa-user"></i>
              <span>Personal Information</span>
            </div>
            
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Dr. John Doe"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="doctor@example.com"
                />
              </div>
              
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Country *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            
            {/* Professional Information */}
            <div className="form-section-title">
              <i className="fas fa-stethoscope"></i>
              <span>Professional Information</span>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Specialization *</label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Specialization</option>
                  {specializations.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Qualification *</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Qualification</option>
                  {qualifications.map(qual => (
                    <option key={qual} value={qual}>{qual}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Years of Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Experience</option>
                  {experienceYears.map(year => (
                    <option key={year} value={year}>{year} {year === 1 ? 'year' : 'years'}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Medical License Number *</label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter medical license number"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Hospital Affiliation *</label>
              <input
                type="text"
                name="hospitalAffiliation"
                value={formData.hospitalAffiliation}
                onChange={handleChange}
                required
                placeholder="Enter affiliated hospital name"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Consultation Fee (USD) *</label>
                <input
                  type="number"
                  name="consultationFee"
                  value={formData.consultationFee}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 50"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Available Days *</label>
                <input
                  type="text"
                  name="availableDays"
                  value={formData.availableDays}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Monday - Friday"
                />
              </div>
              
              <div className="form-group">
                <label>Available Time *</label>
                <input
                  type="text"
                  name="availableTime"
                  value={formData.availableTime}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 9:00 AM - 5:00 PM"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Bio / Professional Summary *</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write a brief introduction about yourself, your expertise, and approach to patient care..."
              ></textarea>
            </div>
            
            <div className="form-group">
              <label>Profile Photo</label>
              <input
                type="file"
                name="profileImage"
                onChange={handleFileChange}
                accept="image/*"
                className="file-input"
              />
              <small className="form-hint">Upload a professional photo (optional)</small>
            </div>
            
            {/* Security */}
            <div className="form-section-title">
              <i className="fas fa-lock"></i>
              <span>Security</span>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password (min. 6 characters)"
                />
              </div>
              
              <div className="form-group">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            
            <div className="form-checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
              </label>
            </div>
            
            <div className="form-checkbox">
              <input type="checkbox" id="verification" required />
              <label htmlFor="verification">
                I confirm that the information provided is accurate and I hold a valid medical license
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
              {loading ? 'Creating Account...' : 'Register as Doctor'}
            </button>
          </form>
          
          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Login here</Link></p>
            <p className="back-link"><Link to="/register/patient">← Register as Patient instead</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}