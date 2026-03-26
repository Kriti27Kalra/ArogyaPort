// src/pages/Enquiry.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Enquiry.css';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    treatment: '',
    message: '',
    medicalReport: null
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const treatments = [
    'Cardiology',
    'Orthopedics',
    'Neurology',
    'Oncology',
    'Organ Transplant',
    'Cosmetic Surgery',
    'Fertility/IVF',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
      setFormData(prev => ({ ...prev, medicalReport: file }));
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) clearInterval(interval);
      }, 200);
    } else {
      alert('File size should be less than 10MB');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate API call
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        treatment: '',
        message: '',
        medicalReport: null
      });
      setUploadProgress(0);
    }, 5000);
  };

  return (
    <main className="enquiry-page">
      <div className="container">
        <div className="section-header">
          <h1>Get Free Consultation</h1>
          <p>Fill the form below and our medical experts will contact you within 24 hours</p>
        </div>

        <div className="enquiry-grid">
          <div className="enquiry-info">
            <h3>Why Choose Us?</h3>
            <ul>
              <li><i className="fas fa-check-circle"></i> Free expert medical opinion</li>
              <li><i className="fas fa-check-circle"></i> No hidden costs, transparent pricing</li>
              <li><i className="fas fa-check-circle"></i> Personalized treatment plan</li>
              <li><i className="fas fa-check-circle"></i> Assistance with medical visa</li>
              <li><i className="fas fa-check-circle"></i> Airport pickup & accommodation</li>
              <li><i className="fas fa-check-circle"></i> 24/7 dedicated patient support</li>
            </ul>
            
            <div className="contact-alternatives">
              <h4>Or Contact Us Directly</h4>
              <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
              <p><i className="fab fa-whatsapp"></i> +91 98765 43211</p>
              <p><i className="fas fa-envelope"></i> care@medicaltourism.com</p>
            </div>

            <div className="trust-badges">
              <h4>We're Trusted By</h4>
              <div className="badges">
                <span>⭐ 4.9/5 Rating</span>
                <span>🏥 50+ Hospitals</span>
                <span>👨‍⚕️ 200+ Doctors</span>
                <span>🌍 85+ Countries</span>
              </div>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                Thank you! Our team will contact you shortly.
              </div>
            )}
            
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Country *</label>
                <input
                  type="text"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Your country"
                />
              </div>
              <div className="form-group">
                <label>Treatment Interested In *</label>
                <select
                  name="treatment"
                  required
                  value={formData.treatment}
                  onChange={handleChange}
                >
                  <option value="">Select Treatment</option>
                  {treatments.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Medical Reports (Optional)</label>
              <div className="file-upload">
                <input
                  type="file"
                  id="medicalReport"
                  accept=".pdf,.jpg,.png,.doc,.docx"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={() => document.getElementById('medicalReport').click()}
                >
                  <i className="fas fa-upload"></i> Upload Medical Reports
                </button>
                {formData.medicalReport && (
                  <span className="file-name">{formData.medicalReport.name}</span>
                )}
              </div>
              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${uploadProgress}%` }}></div>
                  <span>{uploadProgress}%</span>
                </div>
              )}
              <small>Upload your medical reports for better assistance (Max 10MB, PDF, JPG, PNG, DOC)</small>
            </div>

            <div className="form-group">
              <label>Your Message / Medical Query *</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your medical condition or treatment requirements..."
              ></textarea>
            </div>

            <div className="form-checkbox">
              <input type="checkbox" id="consent" required />
              <label htmlFor="consent">
                I consent to receive medical information and agree to the privacy policy
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Send Enquiry <i className="fas fa-arrow-right"></i>
            </button>

            <p className="form-note">
              <i className="fas fa-lock"></i> Your information is secure and will only be used to assist you with your medical travel.
            </p>
          </form>
        </div>

        <div className="whatsapp-cta">
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-large">
            <i className="fab fa-whatsapp"></i> Or Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}