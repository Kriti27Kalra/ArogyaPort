import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.match(/^\d{10}$/)) e.phone = 'Enter a valid 10-digit number';
    if (form.email && !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Invalid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <main style={{ paddingTop: 100 }}>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help — reach out any time</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container">
          <div className="contact-layout">
            {/* Info Panel */}
            <div className="contact-info-panel">
              <h2>Get In Touch</h2>
              <p>Have questions about our tests or services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

              <div className="contact-cards">
                <a href="tel:+918696222281" className="contact-info-card">
                  <div className="ci-icon">📞</div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 8696222281</p>
                    <p>+91 7230002896</p>
                  </div>
                </a>
                <a href="mailto:info@precisionpathlab.com" className="contact-info-card">
                  <div className="ci-icon">✉️</div>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@precisionpathlab.com</p>
                  </div>
                </a>
                <div className="contact-info-card">
                  <div className="ci-icon">📍</div>
                  <div>
                    <h4>Mansarovar Branch</h4>
                    <p>72/2, Shipra Path, Patel Marg,<br />Mansarovar, Jaipur – 302020</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="ci-icon">📍</div>
                  <div>
                    <h4>Vaishali Nagar Branch</h4>
                    <p>2nd Floor, 9, Akruti Apartments,<br />Chitrakoot, Jaipur – 302021</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="ci-icon">🕐</div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon–Sat: 8:00 AM – 8:30 PM</p>
                    <p>Sunday: 8:00 AM – 2:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="social-row">
                <a href="https://www.facebook.com/precisonpathlab" target="_blank" rel="noreferrer" className="social-btn">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/precisionpathlab/" target="_blank" rel="noreferrer" className="social-btn">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/917230002896" target="_blank" rel="noreferrer" className="social-btn whatsapp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-panel">
              {submitted ? (
                <div className="success-box fade-up">
                  <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>✅</div>
                  <h2>Message Sent!</h2>
                  <p>Thank you, <strong>{form.name}</strong>! We've received your message and will get back to you within 24 hours.</p>
                  <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', subject:'', message:'' }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <h3>Send Us a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" placeholder="Your name" value={form.name} onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(e2 => ({ ...e2, name: '' })); }} />
                      {errors.name && <span className="err">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" maxLength={10} placeholder="10-digit mobile" value={form.phone} onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(e2 => ({ ...e2, phone: '' })); }} />
                      {errors.phone && <span className="err">{errors.phone}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" value={form.email} onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(e2 => ({ ...e2, email: '' })); }} />
                    {errors.email && <span className="err">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <input type="text" placeholder="What is this about?" value={form.subject} onChange={e => { setForm(f => ({ ...f, subject: e.target.value })); setErrors(e2 => ({ ...e2, subject: '' })); }} />
                    {errors.subject && <span className="err">{errors.subject}</span>}
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea rows={5} placeholder="Write your message here..." value={form.message} onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(e2 => ({ ...e2, message: '' })); }}></textarea>
                    {errors.message && <span className="err">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <i className="fa fa-paper-plane"></i> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="section-pad" style={{ background: '#f0f7ff' }}>
        <div className="container">
          <div className="section-title">
            <h2>Find Us</h2>
          </div>
          <div className="maps-grid">
            <div className="map-box">
              <h4>📍 Mansarovar Branch</h4>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14238.140506209242!2d75.7730997!3d26.8547344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5230f2899a5%3A0xde62d7d0e085d8c3!2sPrecision%20Path%20Lab%20%7C%20Path%20Lab%20in%20Jaipur%20%7C%20Mansarovar!5e0!3m2!1sen!2sin!4v1680676109737!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0, borderRadius: 12 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mansarovar Branch"></iframe>
            </div>
            <div className="map-box">
              <h4>📍 Vaishali Nagar Branch</h4>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0547805694996!2d75.7413212!3d26.901756499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db51d7e983483%3A0x80687443d6f95370!2sPrecision%20Path%20Lab%20%7C%20Best%20Diagnostic%20Centre%20%7C%20Full%20body%20Checkup%20in%20Vaishali%20Nagar%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1690892304193!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0, borderRadius: 12 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Vaishali Nagar Branch"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
