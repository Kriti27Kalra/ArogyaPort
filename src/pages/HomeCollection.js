import React, { useState } from 'react';
import './HomeCollection.css';

const steps = [
  { step: "1", icon: "📱", title: "Book Online or Call", desc: "Book your home collection via our website, WhatsApp, or phone call." },
  { step: "2", icon: "📅", title: "Schedule a Slot", desc: "Choose a convenient date and time slot for the sample collection." },
  { step: "3", icon: "🚗", title: "Phlebotomist Visits", desc: "Our trained and certified phlebotomist arrives at your doorstep." },
  { step: "4", icon: "🧪", title: "Sample Collection", desc: "Samples are collected hygienically using sterile, disposable equipment." },
  { step: "5", icon: "🔬", title: "Lab Analysis", desc: "Samples are transported to our lab for precise analysis." },
  { step: "6", icon: "📄", title: "Report Delivery", desc: "Results delivered digitally or in print within the promised timeline." },
];

const faqs = [
  { q: "Is there any extra charge for home collection?", a: "Home collection is available free of charge for orders above ₹500. For orders below ₹500, a nominal convenience fee of ₹50 may apply." },
  { q: "Are the phlebotomists trained and verified?", a: "Yes, all our home collection staff are professionally trained, certified, and carry valid ID cards. They use sterile, single-use equipment for every visit." },
  { q: "What areas in Jaipur do you cover?", a: "We cover all major areas of Jaipur including Mansarovar, Vaishali Nagar, Chitrakoot, Malviya Nagar, C-Scheme, Bani Park, Raja Park, Tonk Road and surrounding areas." },
  { q: "What is the earliest slot available?", a: "Our earliest home collection slot starts at 7:00 AM. We recommend booking a day in advance to secure your preferred slot." },
  { q: "How are samples transported safely?", a: "All samples are transported in temperature-controlled, sealed containers following medical safety protocols to ensure sample integrity." },
];

export default function HomeCollection() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', address: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ paddingTop: 100 }}>
      <div className="page-header">
        <div className="container">
          <h1>Home Collection</h1>
          <p>Get your samples collected at your doorstep — safe, hygienic & convenient</p>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="hc-banner">
        <div className="container hc-banner-inner">
          <div className="hc-banner-text">
            <div className="badge">At Your Doorstep</div>
            <h2>No need to visit the lab!</h2>
            <p>Our certified phlebotomists come to your home, collect your sample with care, and deliver your reports digitally — all from the comfort of your home.</p>
            <div className="hc-highlights">
              <span>✅ Trained & Certified Staff</span>
              <span>✅ Sterile Equipment</span>
              <span>✅ On-Time Collection</span>
              <span>✅ Digital Reports</span>
            </div>
          </div>
          <div className="hc-banner-visual">
            <div className="hc-visual-card">
              <div style={{ fontSize: '5rem' }}>🏠</div>
              <h3>Book Home Collection</h3>
              <p>Available 7 AM – 7 PM, 7 days a week</p>
              <a href="tel:+918696222281" className="btn btn-primary">
                <i className="fa fa-phone"></i> Call to Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad" style={{ background: '#f0f7ff' }}>
        <div className="container">
          <div className="section-title">
            <div className="badge">Process</div>
            <h2>How It Works</h2>
            <p>Simple, transparent, and hassle-free home collection in 6 easy steps.</p>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="step-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="step-num">{s.step}</div>
                <div className="step-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Form */}
      <section className="section-pad">
        <div className="container">
          <div className="section-title">
            <div className="badge">Schedule Now</div>
            <h2>Book Your Home Collection</h2>
          </div>
          {submitted ? (
            <div className="success-box fade-up">
              <div style={{ fontSize: '4rem', marginBottom: 20 }}>✅</div>
              <h2>Request Received!</h2>
              <p>Thank you, <strong>{form.name}</strong>! Our team will call you at <strong>{form.phone}</strong> to confirm your slot.</p>
              <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', address:'', date:'', time:'' }); }}>
                Book Another
              </button>
            </div>
          ) : (
            <form className="hc-form" onSubmit={handleSubmit}>
              <div className="hc-form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" required placeholder="Your full name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" required maxLength={10} placeholder="10-digit number" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                  <label>Address *</label>
                  <input type="text" required placeholder="House No., Street, Area, Jaipur" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label>Preferred Date *</label>
                  <input type="date" required value={form.date} min={new Date().toISOString().split('T')[0]} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label>Preferred Time *</label>
                  <select required value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))}>
                    <option value="">Select time slot</option>
                    <option value="7:00 AM – 9:00 AM">7:00 AM – 9:00 AM</option>
                    <option value="9:00 AM – 11:00 AM">9:00 AM – 11:00 AM</option>
                    <option value="11:00 AM – 1:00 PM">11:00 AM – 1:00 PM</option>
                    <option value="1:00 PM – 3:00 PM">1:00 PM – 3:00 PM</option>
                    <option value="3:00 PM – 5:00 PM">3:00 PM – 5:00 PM</option>
                    <option value="5:00 PM – 7:00 PM">5:00 PM – 7:00 PM</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: 8 }}>
                <i className="fa fa-calendar-check"></i> Schedule Home Collection
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad" style={{ background: '#f0f7ff' }}>
        <div className="container">
          <div className="section-title">
            <div className="badge">FAQs</div>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">
                  <span>{faq.q}</span>
                  <i className={`fa fa-chevron-${openFaq === i ? 'up' : 'down'}`}></i>
                </div>
                {openFaq === i && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
