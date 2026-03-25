import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HealthPackages.css';

const packages = [
  {
    name: "Basic Health Checkup",
    price: "₹999",
    original: "₹1800",
    icon: "🌱",
    color: "#e8f5e9",
    accent: "#2e7d32",
    tests: ["CBC (Complete Blood Count)", "Blood Sugar (Fasting)", "Urine Routine", "ESR", "LFT Basic"],
    ideal: "Young adults, first-time checkup",
    popular: false,
  },
  {
    name: "Comprehensive Health Package",
    price: "₹1,999",
    original: "₹3,500",
    icon: "⭐",
    color: "#e3f2fd",
    accent: "#1565c0",
    tests: ["CBC", "Lipid Profile", "LFT", "KFT", "Thyroid (TSH)", "Blood Sugar", "Urine", "Vitamin D & B12", "HbA1c"],
    ideal: "Adults 30+, annual checkup",
    popular: true,
  },
  {
    name: "Advanced Full Body Checkup",
    price: "₹3,499",
    original: "₹6,000",
    icon: "🏆",
    color: "#fce4ec",
    accent: "#c62828",
    tests: ["All Comprehensive tests", "Cardiac Risk Markers", "Thyroid Full Panel", "Hormone Profile", "Bone Profile", "Iron Studies", "Allergy Panel", "Cancer Markers (PSA/CEA)", "ECG", "Chest X-Ray"],
    ideal: "Adults 45+, comprehensive wellness",
    popular: false,
  },
  {
    name: "Diabetes Care Package",
    price: "₹799",
    original: "₹1,400",
    icon: "💉",
    color: "#fff8e1",
    accent: "#f57f17",
    tests: ["HbA1c", "Fasting Blood Sugar", "Post Prandial Sugar", "Urine Microalbumin", "Lipid Profile", "Kidney Function"],
    ideal: "Diabetics & pre-diabetics",
    popular: false,
  },
  {
    name: "Women's Wellness Package",
    price: "₹1,499",
    original: "₹2,800",
    icon: "🌸",
    color: "#fce4ec",
    accent: "#880e4f",
    tests: ["CBC", "Hormone Profile (FSH, LH, Estrogen)", "Thyroid Panel", "Vitamin D & B12", "Iron Studies", "HbA1c", "Urine Routine", "Pap Smear Guidance"],
    ideal: "Women 25+, hormonal health",
    popular: false,
  },
  {
    name: "Senior Citizen Package",
    price: "₹2,499",
    original: "₹4,500",
    icon: "👴",
    color: "#ede7f6",
    accent: "#4527a0",
    tests: ["Full Blood Panel", "Cardiac Markers", "Thyroid", "Kidney & Liver Function", "Bone Density (Calcium, Vit D)", "Blood Sugar", "PSA (men)", "Urine & Stool"],
    ideal: "Adults 60+, preventive care",
    popular: false,
  },
];

export default function HealthPackages() {
  const [selected, setSelected] = useState(null);

  return (
    <main style={{ paddingTop: 100 }}>
      <div className="page-header">
        <div className="container">
          <h1>Health Packages</h1>
          <p>Affordable, comprehensive health checkup packages for every need</p>
        </div>
      </div>

      {/* Why Packages */}
      <section className="section-pad">
        <div className="container">
          <div className="section-title">
            <div className="badge">Why Choose a Package?</div>
            <h2>Better Value, Better Health</h2>
            <p>Our curated health packages save you money while covering everything you need for a thorough health assessment.</p>
          </div>
          <div className="pkg-benefits">
            {[
              { icon: '💰', title: 'Save Up to 50%', desc: 'Package prices are significantly lower than individual test prices.' },
              { icon: '🎯', title: 'Curated by Experts', desc: 'Designed by our doctors to cover the most important health markers.' },
              { icon: '⚡', title: 'Same Day Reports', desc: 'Most package results delivered on the same day.' },
              { icon: '🏠', title: 'Home Collection', desc: 'Get your samples collected at home at no extra charge.' },
            ].map((b, i) => (
              <div key={i} className="benefit-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="benefit-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-pad" style={{ background: '#f0f7ff' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Health Packages</h2>
            <p>Click on a package to see all included tests.</p>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`pkg-card${pkg.popular ? ' popular' : ''}${selected === i ? ' expanded' : ''}`}
                style={{ '--pkg-color': pkg.color, '--pkg-accent': pkg.accent }}
                onClick={() => setSelected(selected === i ? null : i)}
              >
                {pkg.popular && <div className="pkg-popular-badge">Most Popular</div>}
                <div className="pkg-header">
                  <div className="pkg-icon">{pkg.icon}</div>
                  <h3>{pkg.name}</h3>
                  <div className="pkg-price">
                    <span className="current-price">{pkg.price}</span>
                    <span className="original-price">{pkg.original}</span>
                  </div>
                  <p className="pkg-ideal"><i className="fa fa-user"></i> {pkg.ideal}</p>
                </div>
                {selected === i && (
                  <div className="pkg-tests">
                    <h5>Included Tests ({pkg.tests.length})</h5>
                    <ul>
                      {pkg.tests.map((t, j) => (
                        <li key={j}><i className="fa fa-check-circle"></i> {t}</li>
                      ))}
                    </ul>
                    <Link to="/book-test" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}
                      onClick={e => e.stopPropagation()}>
                      Book This Package
                    </Link>
                  </div>
                )}
                <div className="pkg-toggle">{selected === i ? '▲ Hide Tests' : '▼ View Tests'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg,#0d47a1,#1565c0)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: 12 }}>Not sure which package to choose?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 28 }}>Call us and our experts will help you select the right package for your needs.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+918696222281" className="btn btn-accent"><i className="fa fa-phone"></i> Call Now</a>
            <a href="https://wa.me/917230002896" target="_blank" rel="noreferrer" className="btn btn-outline-white">
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
