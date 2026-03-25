import React from 'react';
import './Laboratories.css';

const labs = [
  {
    name: "Mansarovar Branch",
    address: "72/2, Shipra Path, Patel Marg, Mansarovar, Jaipur – 302020",
    phone: "+91-141-2786337, +91-8696222281",
    email: "info@precisionpathlab.com",
    timing: { weekday: "Mon–Sat: 8:00 AM – 8:30 PM", sunday: "Sunday: 8:00 AM – 2:30 PM" },
    mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14238.140506209242!2d75.7730997!3d26.8547344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5230f2899a5%3A0xde62d7d0e085d8c3!2sPrecision%20Path%20Lab%20%7C%20Path%20Lab%20in%20Jaipur%20%7C%20Mansarovar!5e0!3m2!1sen!2sin!4v1680676109737!5m2!1sen!2sin",
    rating: "4.3",
    reviews: "260+",
    icon: "🏥",
    badge: "Main Branch",
  },
  {
    name: "Vaishali Nagar Branch",
    address: "2nd Floor, 9, Infront Of Akshardham Temple, 102 Akruti Apartments, Chitrakoot, Jaipur – 302021",
    phone: "+91-8696222006",
    email: "info@precisionpathlab.com",
    timing: { weekday: "Mon–Sat: 8:00 AM – 8:30 PM", sunday: "Sunday: 8:00 AM – 2:30 PM" },
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0547805694996!2d75.7413212!3d26.901756499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db51d7e983483%3A0x80687443d6f95370!2sPrecision%20Path%20Lab%20%7C%20Best%20Diagnostic%20Centre%20%7C%20Full%20body%20Checkup%20in%20Vaishali%20Nagar%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1690892304193!5m2!1sen!2sin",
    rating: "5.0",
    reviews: "50+",
    icon: "🏨",
    badge: "New Branch",
  },
];

const equipment = [
  { icon: "🔬", name: "Advanced Microscopy", desc: "High-resolution microscopes for accurate cellular analysis." },
  { icon: "🧬", name: "DNA Analyser", desc: "Genetic testing and molecular diagnostics equipment." },
  { icon: "⚗️", name: "Auto Analyser", desc: "Fully automated chemistry analyser for fast, accurate results." },
  { icon: "🩺", name: "ECG Machine", desc: "12-lead ECG for comprehensive cardiac assessment." },
  { icon: "📡", name: "Ultrasound", desc: "High-frequency ultrasound for detailed imaging." },
  { icon: "☢️", name: "X-Ray Unit", desc: "Digital X-ray for clear diagnostic imaging." },
];

export default function Laboratories() {
  return (
    <main style={{ paddingTop: 100 }}>
      <div className="page-header">
        <div className="container">
          <h1>Our Laboratories</h1>
          <p>Two state-of-the-art diagnostic centres in Jaipur</p>
        </div>
      </div>

      {/* Labs */}
      <section className="section-pad">
        <div className="container">
          <div className="section-title">
            <div className="badge">Our Locations</div>
            <h2>Visit Us</h2>
            <p>We have two conveniently located labs in Jaipur, both equipped with modern diagnostic equipment.</p>
          </div>
          <div className="labs-grid">
            {labs.map((lab, i) => (
              <div key={i} className="lab-card fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="lab-card-header">
                  <div className="lab-icon">{lab.icon}</div>
                  <div>
                    <span className="lab-badge">{lab.badge}</span>
                    <h3>{lab.name}</h3>
                  </div>
                  <div className="lab-rating">
                    <span className="rating-val">⭐ {lab.rating}</span>
                    <span className="rating-count">{lab.reviews} reviews</span>
                  </div>
                </div>

                <div className="lab-info">
                  <div className="lab-info-item">
                    <i className="fa fa-map-marker-alt"></i>
                    <p>{lab.address}</p>
                  </div>
                  <div className="lab-info-item">
                    <i className="fa fa-phone"></i>
                    <p>{lab.phone}</p>
                  </div>
                  <div className="lab-info-item">
                    <i className="fa fa-envelope"></i>
                    <p>{lab.email}</p>
                  </div>
                  <div className="lab-info-item">
                    <i className="fa fa-clock"></i>
                    <div>
                      <p>{lab.timing.weekday}</p>
                      <p>{lab.timing.sunday}</p>
                    </div>
                  </div>
                </div>

                <div className="lab-map">
                  <iframe
                    src={lab.mapSrc}
                    width="100%"
                    height="220"
                    style={{ border: 0, borderRadius: 12 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={lab.name}
                  ></iframe>
                </div>

                <div className="lab-actions">
                  <a href={`tel:${lab.phone.split(',')[0].replace(/\s/g,'')}`} className="btn btn-primary">
                    <i className="fa fa-phone"></i> Call Branch
                  </a>
                  <a href="https://wa.me/917230002896" target="_blank" rel="noreferrer" className="btn btn-outline">
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-pad" style={{ background: '#f0f7ff' }}>
        <div className="container">
          <div className="section-title">
            <div className="badge">Technology</div>
            <h2>Our Equipment & Technology</h2>
            <p>We invest in the latest diagnostic technology to ensure accurate and reliable results.</p>
          </div>
          <div className="equip-grid">
            {equipment.map((e, i) => (
              <div key={i} className="equip-card fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="equip-icon">{e.icon}</div>
                <h4>{e.name}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="section-pad">
        <div className="container">
          <div className="section-title">
            <div className="badge">Quality</div>
            <h2>Quality & Accreditation</h2>
          </div>
          <div className="accred-grid">
            {[
              { icon: "🏅", title: "ISO Certified", desc: "Our labs follow strict ISO quality management standards." },
              { icon: "🔐", title: "Data Security", desc: "Patient data is securely stored and kept strictly confidential." },
              { icon: "✅", title: "Quality Control", desc: "Daily internal and external quality checks on all analysers." },
              { icon: "🧑‍🔬", title: "Expert Pathologists", desc: "All reports verified by qualified and experienced doctors." },
            ].map((a, i) => (
              <div key={i} className="accred-card">
                <div className="accred-icon">{a.icon}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
