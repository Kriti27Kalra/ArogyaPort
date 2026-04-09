import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const popularTreatments = [
  {
    name: "Knee Replacement",
    desc: "Advanced robotic knee replacement surgery with faster recovery and minimal pain.",
    success: "95%",
    price: "$4,500",
    icon: "🦵",
    detailedInfo: {
      overview: "Knee replacement surgery (arthroplasty) is a surgical procedure to resurface a knee damaged by arthritis. Metal and plastic parts are used to cap the ends of the bones that form the knee joint, along with the kneecap.",
      duration: "2-3 hours",
      recovery: "6-8 weeks",
      hospitalStay: "3-5 days",
      successRate: "95-98%",
      benefits: [
        "Relieves pain",
        "Improves mobility and function",
        "Better quality of life",
        "Long-lasting results (15-20 years)"
      ],
      hospitals: [
        "Apollo Hospitals, Chennai",
        "Fortis Memorial, Gurgaon",
        "Medanta, Gurugram"
      ]
    }
  },
  {
    name: "Cardiac Bypass",
    desc: "Life-saving heart bypass surgery performed by top cardiologists with advanced technology.",
    success: "98%",
    price: "$6,200",
    icon: "❤️",
    detailedInfo: {
      overview: "Coronary artery bypass graft surgery (CABG) is a procedure to improve blood flow to the heart. Surgeons take a healthy blood vessel from another part of the body to create a new path around blocked arteries.",
      duration: "3-6 hours",
      recovery: "6-12 weeks",
      hospitalStay: "7-10 days",
      successRate: "98-99%",
      benefits: [
        "Reduces risk of heart attack",
        "Improves heart function",
        "Relieves chest pain",
        "Increases life expectancy"
      ],
      hospitals: [
        "Asian Heart Institute, Mumbai",
        "Narayana Health, Bangalore",
        "Max Hospital, Delhi"
      ]
    }
  },
  {
    name: "Hip Replacement",
    desc: "Minimally invasive hip replacement surgery ensuring quick mobility and less scarring.",
    success: "94%",
    price: "$4,200",
    icon: "🦴",
    detailedInfo: {
      overview: "Hip replacement is a surgical procedure in which the hip joint is replaced by a prosthetic implant. It's typically performed for osteoarthritis or hip fractures.",
      duration: "1-2 hours",
      recovery: "4-6 weeks",
      hospitalStay: "3-4 days",
      successRate: "94-97%",
      benefits: [
        "Eliminates hip pain",
        "Restores mobility",
        "Improves quality of life",
        "Long-lasting results"
      ],
      hospitals: [
        "Artemis Hospital, Gurgaon",
        "Kokilaben Hospital, Mumbai",
        "Manipal Hospital, Bangalore"
      ]
    }
  },
  {
    name: "Spine Surgery",
    desc: "Advanced spine surgery including microdiscectomy and spinal fusion with high precision.",
    success: "92%",
    price: "$5,800",
    icon: "💪",
    detailedInfo: {
      overview: "Spine surgery includes various procedures to treat back pain, herniated discs, spinal stenosis, and other spinal conditions using minimally invasive techniques.",
      duration: "2-4 hours",
      recovery: "8-12 weeks",
      hospitalStay: "4-7 days",
      successRate: "92-96%",
      benefits: [
        "Relieves chronic back pain",
        "Restores spinal stability",
        "Improves mobility",
        "Minimally invasive options"
      ],
      hospitals: [
        "Wockhardt Hospital, Mumbai",
        "Columbia Asia, Bangalore",
        "Jaypee Hospital, Noida"
      ]
    }
  },
  {
    name: "Cancer Treatment",
    desc: "Comprehensive cancer care including chemotherapy, radiation, and immunotherapy.",
    success: "85%",
    price: "$3,500",
    icon: "🎗️",
    detailedInfo: {
      overview: "Comprehensive cancer treatment including surgery, chemotherapy, radiation therapy, targeted therapy, and immunotherapy provided by expert oncologists.",
      duration: "Varies by case",
      recovery: "Varies by case",
      hospitalStay: "As needed",
      successRate: "85-95% depending on type",
      benefits: [
        "Multidisciplinary approach",
        "Advanced treatment options",
        "Palliative care support",
        "Clinical trials access"
      ],
      hospitals: [
        "Tata Memorial, Mumbai",
        "HCG Cancer Centre, Bangalore",
        "Rajiv Gandhi Cancer Institute, Delhi"
      ]
    }
  },
  {
    name: "Organ Transplant",
    desc: "Kidney, liver, and heart transplants with high success rates and minimal waiting time.",
    success: "90%",
    price: "$15,000",
    icon: "🏥",
    detailedInfo: {
      overview: "Organ transplantation including kidney, liver, heart, and lung transplants performed by experienced transplant surgeons with high success rates.",
      duration: "4-8 hours",
      recovery: "3-6 months",
      hospitalStay: "2-4 weeks",
      successRate: "90-95%",
      benefits: [
        "Life-saving procedure",
        "Improved quality of life",
        "Expert transplant teams",
        "Comprehensive post-transplant care"
      ],
      hospitals: [
        "Apollo Hospitals, Chennai",
        "Medanta, Gurugram",
        "Fortis, Delhi"
      ]
    }
  }
];

const TreatmentsSection = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Trigger scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openTreatmentModal = (treatment) => {
    setSelectedTreatment(treatment);
    setAnimateIn(true);
    document.body.style.overflow = 'hidden';
  };

  const closeTreatmentModal = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setSelectedTreatment(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeTreatmentModal();
    }
  };

  return (
    <>
      <section className="section treatments">
        <div className="container">
          <div className="section-header scroll-animate">
            <h2>Popular Treatments in India</h2>
            <p>Choose from a wide range of advanced medical procedures with high success rates</p>
          </div>
          <div className="treatments-grid">
            {popularTreatments.map((treatment, i) => (
              <div 
                key={i} 
                className="treatment-card scroll-animate" 
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="treatment-icon">{treatment.icon}</div>
                <h3>{treatment.name}</h3>
                <p>{treatment.desc}</p>
                <div className="treatment-meta">
                  <div className="treatment-success">
                    <span className="success-label">Success Rate</span>
                    <div className="success-bar">
                      <div className="success-fill" style={{ width: treatment.success }}></div>
                    </div>
                    <span className="success-value">{treatment.success}</span>
                  </div>
                  <div className="treatment-price">
                    <span className="price-label">Starting from</span>
                    <span className="price-value">{treatment.price}</span>
                  </div>
                </div>
                <button 
                  onClick={() => openTreatmentModal(treatment)}
                  className="learn-more"
                >
                  Learn More <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
          <div className="section-cta scroll-animate">
            <Link to="/treatments" className="btn btn-outline">View All Treatments</Link>
          </div>
        </div>
      </section>

      {/* Treatment Details Modal */}
      {selectedTreatment && (
        <div className={`modal-overlay ${animateIn ? 'active' : ''}`} onClick={handleOverlayClick}>
          <div className={`modal-container ${animateIn ? 'active' : ''}`}>
            <button className="modal-close" onClick={closeTreatmentModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <div className="modal-icon">{selectedTreatment.icon}</div>
              <h2>{selectedTreatment.name}</h2>
              <p className="modal-subtitle">{selectedTreatment.desc}</p>
            </div>

            <div className="modal-body">
              <div className="info-section">
                <h3><i className="fas fa-info-circle"></i> Overview</h3>
                <p>{selectedTreatment.detailedInfo.overview}</p>
              </div>

              <div className="stats-grid-modal">
                <div className="stat-card">
                  <i className="fas fa-clock"></i>
                  <div className="stat-content">
                    <span className="stat-label">Duration</span>
                    <span className="stat-value">{selectedTreatment.detailedInfo.duration}</span>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-heartbeat"></i>
                  <div className="stat-content">
                    <span className="stat-label">Recovery Time</span>
                    <span className="stat-value">{selectedTreatment.detailedInfo.recovery}</span>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-hospital-user"></i>
                  <div className="stat-content">
                    <span className="stat-label">Hospital Stay</span>
                    <span className="stat-value">{selectedTreatment.detailedInfo.hospitalStay}</span>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-chart-line"></i>
                  <div className="stat-content">
                    <span className="stat-label">Success Rate</span>
                    <span className="stat-value">{selectedTreatment.detailedInfo.successRate}</span>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3><i className="fas fa-check-circle"></i> Key Benefits</h3>
                <ul className="benefits-list">
                  {selectedTreatment.detailedInfo.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3><i className="fas fa-hospital"></i> Top Hospitals</h3>
                <div className="hospitals-list">
                  {selectedTreatment.detailedInfo.hospitals.map((hospital, idx) => (
                    <div key={idx} className="hospital-item">
                      <i className="fas fa-star-of-life"></i>
                      <span>{hospital}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-cta">
                <button className="btn btn-primary">
                  <i className="fab fa-whatsapp"></i> Get Free Consultation
                </button>
                <button className="btn btn-outline">
                  <i className="fas fa-phone-alt"></i> Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TreatmentsSection;