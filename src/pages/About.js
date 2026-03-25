import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const team = [
  { name: "Dr. Rajesh Sharma", role: "Chief Pathologist", exp: "15+ Years", icon: "👨‍⚕️" },
  { name: "Dr. Priya Gupta", role: "Clinical Biochemist", exp: "10+ Years", icon: "👩‍⚕️" },
  { name: "Dr. Anil Verma", role: "Microbiologist", exp: "12+ Years", icon: "👨‍⚕️" },
  { name: "Dr. Sunita Singh", role: "Haematologist", exp: "8+ Years", icon: "👩‍⚕️" },
];

const milestones = [
  { year: "2012", title: "Founded", desc: "Precision Path Lab established in Mansarovar, Jaipur." },
  { year: "2015", title: "Expanded", desc: "Added new advanced equipment and expanded test menu." },
  { year: "2019", title: "New Branch", desc: "Opened second branch in Vaishali Nagar." },
  { year: "2023", title: "Digital Reports", desc: "Launched online report delivery system." },
];

export default function About() {
  return (
    <main style={{ paddingTop: 100 }}>
      <div className="page-header">
        <div className="container">
          <h1>About Precision Path Lab</h1>
          <p>Jaipur's trusted diagnostic centre since 2012</p>
        </div>
      </div>

      {/* Mission */}
      <section className="section-pad">
        <div className="container about-intro-grid">
          <div className="about-visual">
            <div className="about-icon-big">🔬</div>
            <div className="about-stats-mini">
              <div className="mini-stat"><span>15+</span><p>Years</p></div>
              <div className="mini-stat"><span>4</span><p>Doctors</p></div>
              <div className="mini-stat"><span>15+</span><p>Staff</p></div>
              <div className="mini-stat"><span>2</span><p>Branches</p></div>
            </div>
          </div>
          <div className="about-text">
            <div className="badge">Our Story</div>
            <h2>Dedicated to Diagnostic Excellence</h2>
            <p>Welcome to Precision Path Lab, Jaipur's leading laboratory for exceptional pathology services. Our expert team of four doctors and 15 clinical staff members, backed by over 15 years of experience, ensures accurate and prompt results.</p>
            <p>We provide services at 2 renowned locations in Jaipur city – in Mansarovar and in Vaishali Nagar. Our services include diagnostics, blood tests, pathology labs, X-rays, ECGs, ultrasound, and more.</p>
            <p>At Precision Path Lab, our priority is to treat every specimen/sample with equal promptness and expert attention. In critical cases we provide special and quick service.</p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 20 }}>Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-pad" style={{ background: '#f0f7ff' }}>
        <div className="container">
          <div className="section-title">
            <div className="badge">Our Journey</div>
            <h2>Milestones</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline-item${i % 2 === 0 ? '' : ' right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{m.year}</div>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad">
        <div className="container">
          <div className="section-title">
            <div className="badge">Our Team</div>
            <h2>Expert Medical Team</h2>
            <p>Our experienced doctors and staff ensure accurate results and compassionate care.</p>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={i} className="team-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="team-avatar">{m.icon}</div>
                <h4>{m.name}</h4>
                <p className="team-role">{m.role}</p>
                <span className="team-exp">{m.exp} Experience</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #0d47a1, #1565c0)', color: '#fff' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: '#fff' }}>Our Core Values</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>The principles that guide every test, every result, every patient interaction.</p>
          </div>
          <div className="values-grid">
            {[
              { icon: '🎯', title: 'Accuracy', desc: 'Precision in every test result.' },
              { icon: '⚡', title: 'Speed', desc: 'Timely reports when you need them.' },
              { icon: '🤝', title: 'Compassion', desc: 'Patient-first approach always.' },
              { icon: '🔒', title: 'Privacy', desc: 'Your health data is confidential.' },
            ].map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
