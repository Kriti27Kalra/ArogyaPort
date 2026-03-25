import React, { useState } from 'react';
import './BookTest.css';

const categories = ['All', 'Blood Tests', 'Thyroid', 'Allergy', 'Infection', 'Hormones', 'Diabetes', 'Full Body'];

const allTests = [
  { name: "Complete Blood Count (CBC)", cat: "Blood Tests", price: "₹180", time: "Same Day", icon: "🩸", popular: true },
  { name: "TSH (Thyroid Stimulating Hormone)", cat: "Thyroid", price: "₹250", time: "Same Day", icon: "🦋", popular: true },
  { name: "Allergy Test (IgE Panel)", cat: "Allergy", price: "₹1200", time: "2-3 Days", icon: "🌿", popular: false },
  { name: "Swine Flu (H1N1) Test", cat: "Infection", price: "₹800", time: "Same Day", icon: "🧫", popular: false },
  { name: "Lipid Profile", cat: "Blood Tests", price: "₹350", time: "Same Day", icon: "❤️", popular: true },
  { name: "HbA1c (Blood Sugar Control)", cat: "Diabetes", price: "₹280", time: "Same Day", icon: "💉", popular: true },
  { name: "Liver Function Test (LFT)", cat: "Blood Tests", price: "₹400", time: "Same Day", icon: "🫁", popular: false },
  { name: "Urine Routine & Microscopy", cat: "Blood Tests", price: "₹120", time: "Same Day", icon: "🧪", popular: false },
  { name: "Vitamin D (25-OH)", cat: "Hormones", price: "₹700", time: "Same Day", icon: "☀️", popular: true },
  { name: "Vitamin B12", cat: "Hormones", price: "₹550", time: "Same Day", icon: "💊", popular: false },
  { name: "T3, T4, TSH (Thyroid Panel)", cat: "Thyroid", price: "₹500", time: "Same Day", icon: "🦋", popular: false },
  { name: "Dengue NS1 Antigen", cat: "Infection", price: "₹600", time: "Same Day", icon: "🦟", popular: false },
  { name: "Malaria Test", cat: "Infection", price: "₹200", time: "Same Day", icon: "🦠", popular: false },
  { name: "Typhoid (Widal Test)", cat: "Infection", price: "₹150", time: "Same Day", icon: "🌡️", popular: false },
  { name: "Blood Sugar (Fasting)", cat: "Diabetes", price: "₹80", time: "Same Day", icon: "🔬", popular: false },
  { name: "HCG (Pregnancy Test)", cat: "Hormones", price: "₹220", time: "Same Day", icon: "🤰", popular: false },
  { name: "Full Body Checkup Basic", cat: "Full Body", price: "₹1499", time: "Same Day", icon: "🏥", popular: true },
  { name: "Full Body Checkup Advanced", cat: "Full Body", price: "₹2999", time: "Same Day", icon: "🏥", popular: false },
];

export default function BookTest() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', mode: 'lab' });

  const filtered = allTests.filter(t => {
    const matchCat = selectedCat === 'All' || t.cat === selectedCat;
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleCart = (test) => {
    setCart(prev =>
      prev.find(c => c.name === test.name)
        ? prev.filter(c => c.name !== test.name)
        : [...prev, test]
    );
  };
  const inCart = (name) => cart.some(c => c.name === name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ paddingTop: 100 }}>
      <div className="page-header">
        <div className="container">
          <h1>Book a Test</h1>
          <p>Browse our comprehensive test menu and book with ease</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container">
          {submitted ? (
            <div className="success-box fade-up">
              <div className="success-icon">✅</div>
              <h2>Booking Confirmed!</h2>
              <p>Thank you, <strong>{form.name}</strong>! We've received your request for <strong>{cart.length} test(s)</strong>.</p>
              <p>Our team will contact you at <strong>{form.phone}</strong> to confirm your appointment.</p>
              <button className="btn btn-primary" onClick={() => { setSubmitted(false); setCart([]); setForm({ name:'', phone:'', email:'', date:'', mode:'lab' }); }}>
                Book Another Test
              </button>
            </div>
          ) : (
            <div className="book-layout">
              {/* Test Selection */}
              <div className="test-selection">
                <div className="search-bar">
                  <i className="fa fa-search"></i>
                  <input
                    type="text"
                    placeholder="Search tests..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
                <div className="cat-filters">
                  {categories.map(c => (
                    <button key={c} className={`cat-btn${selectedCat === c ? ' active' : ''}`} onClick={() => setSelectedCat(c)}>
                      {c}
                    </button>
                  ))}
                </div>
                <div className="test-list">
                  {filtered.map((test, i) => (
                    <div key={i} className={`test-list-item${inCart(test.name) ? ' selected' : ''}`}>
                      <div className="tli-icon">{test.icon}</div>
                      <div className="tli-info">
                        <div className="tli-name">
                          {test.name}
                          {test.popular && <span className="pop-tag">Popular</span>}
                        </div>
                        <div className="tli-meta">
                          <span><i className="fa fa-tag"></i> {test.cat}</span>
                          <span><i className="fa fa-clock"></i> {test.time}</span>
                          <span className="tli-price">{test.price}</span>
                        </div>
                      </div>
                      <button
                        className={`add-btn${inCart(test.name) ? ' remove' : ''}`}
                        onClick={() => toggleCart(test)}
                      >
                        {inCart(test.name) ? '✓ Added' : '+ Add'}
                      </button>
                    </div>
                  ))}
                  {filtered.length === 0 && (
                    <div className="no-results">
                      <p>No tests found. Try a different search.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Form */}
              <div className="booking-form-panel">
                <div className="cart-summary">
                  <h3>Selected Tests ({cart.length})</h3>
                  {cart.length === 0 ? (
                    <p className="empty-cart">Add tests from the list to get started.</p>
                  ) : (
                    <ul className="cart-list">
                      {cart.map((t, i) => (
                        <li key={i}>
                          <span>{t.icon} {t.name}</span>
                          <div>
                            <span className="cart-price">{t.price}</span>
                            <button onClick={() => toggleCart(t)} className="remove-btn">✕</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <form className="booking-form" onSubmit={handleSubmit}>
                  <h3>Your Details</h3>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" required placeholder="Enter your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" required placeholder="10-digit number" maxLength={10} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label>Preferred Date *</label>
                    <input type="date" required value={form.date} min={new Date().toISOString().split('T')[0]} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label>Collection Mode *</label>
                    <div className="mode-toggle">
                      <button type="button" className={form.mode === 'lab' ? 'active' : ''} onClick={() => setForm(f => ({ ...f, mode: 'lab' }))}>
                        🏥 Lab Visit
                      </button>
                      <button type="button" className={form.mode === 'home' ? 'active' : ''} onClick={() => setForm(f => ({ ...f, mode: 'home' }))}>
                        🏠 Home Collection
                      </button>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={cart.length === 0}>
                    {cart.length === 0 ? 'Select at least 1 test' : 'Confirm Booking'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
