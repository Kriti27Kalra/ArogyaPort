// Home.jsx - Main component for the Medical Tourism Homepage
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// --- Data Section (Can be moved to separate files) ---
const stats = [
  { value: "3000+", label: "Happy Patients", icon: "😊" },
  { value: "50+", label: "Top Hospitals", icon: "🏥" },
  { value: "200+", label: "Top Doctors", icon: "👨‍⚕️" },
  { value: "10+", label: "Destinations", icon: "📍" },
  { value: "20%", label: "Savings", icon: "💰" },
];

const popularTreatments = [
  { name: "Cardiology", icon: "❤️", desc: "Heart Bypass, Angioplasty, Valve Replacement" },
  { name: "Orthopedics", icon: "🦴", desc: "Knee/Hip Replacement, Spine Surgery" },
  { name: "Oncology", icon: "🎗️", desc: "Cancer Care, Chemotherapy, Radiation" },
  { name: "Organ Transplant", icon: "🫀", desc: "Liver, Kidney, Heart, Bone Marrow" },
  { name: "Cosmetic Surgery", icon: "✨", desc: "Rhinoplasty, Liposuction, Hair Transplant" },
  { name: "Fertility/IVF", icon: "👶", desc: "IVF, ICSI, Surrogacy" },
];

const topHospitals = [
  { name: "Max Hospital", location: "Delhi NCR", specialties: "Multi-specialty", rating: 4.8 },
  { name: "Jaypee Hospital", location: "Noida", specialties: "Cardiac, Ortho", rating: 4.7 },
  { name: "Fortis Escorts", location: "Delhi", specialties: "Cardiac, Neurology", rating: 4.9 },
  { name: "BLK Hospital", location: "Delhi", specialties: "Oncology, Transplant", rating: 4.8 },
  { name: "Artemis Hospital", location: "Gurugram", specialties: "Multi-specialty", rating: 4.7 },
  { name: "Apollo Hospitals", location: "Chennai/Delhi", specialties: "Multi-specialty", rating: 4.9 },
];

const testimonials = [
  { name: "suman", from: "Bangladesh", hospital: "Max Hospital", text: "I choose Peace Medical tourism to organize my brother KIDNEY TRANSPLANT in Max Hospital, New Delhi, India and I have to say I didn't find any problem with their team. when I reached in India till the moment I left. My travel assistant was lovely. The doctor at the hospital was amazing." },
  { name: "dr abdul rahman", from: "Ethiopia", hospital: "BLK HOSPITAL", text: "I am Dr.Abdul Rahman General Surgeon in Ethiopia, I came to India for my mother-in-law surgery. Our treatment trip was facilitated by Mohammad Tariqe (Peace Medical Tourism), which coordinates for international patients in getting the best quality treatment at an affordable cost in India." },
  { name: "mizan", from: "Bangladesh", hospital: "Fortis Escort Hospital", text: "I am Mizan from Dhaka, Bangladesh came to India for my father-in-law cardiac surgery at Fortis Escort Hospital. I was confused to choose the best surgeon for him before coming, but Mr. Mohammad Tarique helps me to choose the best hospital and best cardiac surgeon in India with very good cost." },
  { name: "merag", from: "Ethiopia", hospital: "Jaypee Hospital", text: "I am Merag from Ethiopia came to India for my general health check-up. Peace Medical Tourism offers me the complete package including Pick-up from the airport, hotel services, and 24 hours assistance. They guide you to choose best hospitals in india, best cost of treatmnet with topmost doctors." },
];

const whyChooseIndia = [
  "World-class hospitals with JCI/NABH accreditation",
  "Highly skilled, English-speaking doctors",
  "Cost savings up to 70% compared to Western countries",
  "Advanced medical technology & infrastructure",
  "No waiting time for major surgeries",
  "Holistic care including Ayurveda & Wellness",
  "Rich cultural experience & tourist destinations",
  "Dedicated medical visa & travel assistance",
];

const services = [
  "Free Medical Visa Invitation Letter",
  "Appointment with Top Doctors on Arrival",
  "Free Airport Pick-up & Drop",
  "Hotel/Apartment Booking Near Hospital",
  "24/7 Interpreter Assistance",
  "Post-Treatment Follow-up & Tele-consultation",
];

// --- Helper Components ---
function StarRating({ rating = 4.5 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <i key={i} className={`fas fa-star${i < fullStars ? '' : (i === fullStars && hasHalf ? '-half-alt' : '-o')}`}></i>
      ))}
      <span className="rating-value">{rating}</span>
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  return (
    <div className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="testimonial-header">
        <div className="testimonial-avatar">{testimonial.name.charAt(0).toUpperCase()}</div>
        <div className="testimonial-info">
          <h4>{testimonial.name}</h4>
          <p>From: {testimonial.from}</p>
          <p>Treating Hospital: {testimonial.hospital}</p>
        </div>
      </div>
      <p className="testimonial-text">"{testimonial.text.substring(0, 180)}..."</p>
      <button className="read-more">View More</button>
    </div>
  );
}

// --- Main Home Component ---
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const statsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    statsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-page">
      {/* Hero Section */}
      {/* Hero Section */}
<section className="hero">
  <div className="container">
    <div className="hero-content">
      <h1>Get Treated in India</h1>
      <p className="hero-subtitle">
        World-Class Medical Care at Affordable Costs<br />
        with Complete Travel & Treatment Assistance
      </p>
      <div className="hero-search">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search Treatment, Hospital or Doctor..." />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
      <div className="hero-stats">
        {stats.slice(0, 4).map((stat, i) => (
          <div key={i} className="hero-stat">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
 {/* Animated Wave Effect */}
<div className="hero-wave">
  <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g className="parallax">
      <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
      <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
      <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
      <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.2)" />
    </g>
  </svg>
</div>
</section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-item"
                ref={el => statsRef.current[i] = el}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-title">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="section treatments">
        <div className="container">
          <div className="section-header">
            <h2>Popular Treatments in India</h2>
            <p>Choose from a wide range of advanced medical procedures with high success rates</p>
          </div>
          <div className="treatments-grid">
            {popularTreatments.map((treatment, i) => (
              <div key={i} className="treatment-card">
                <div className="treatment-icon">{treatment.icon}</div>
                <h3>{treatment.name}</h3>
                <p>{treatment.desc}</p>
                <Link to={`/treatments/${treatment.name.toLowerCase()}`} className="learn-more">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/treatments" className="btn btn-outline">View All Treatments</Link>
          </div>
        </div>
      </section>

      {/* Why Choose India */}
      <section className="section why-india">
        <div className="container">
          <div className="why-india-grid">
            <div className="why-india-content">
              <div className="section-header left">
                <h2>Why Choose India for Medical Treatment?</h2>
                <p>India has emerged as a global healthcare destination offering world-class medical facilities at affordable costs</p>
              </div>
              <div className="reasons-grid">
                {whyChooseIndia.map((reason, i) => (
                  <div key={i} className="reason-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
              <Link to="/why-india" className="btn btn-primary">Discover More</Link>
            </div>
            <div className="why-india-image">
              <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=500&fit=crop" alt="Indian Hospital" />
              <div className="image-badge">
                <i className="fas fa-star"></i>
                <span>JCI Accredited Hospitals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="section hospitals">
        <div className="container">
          <div className="section-header">
            <h2>Top Hospitals in India</h2>
            <p>Partnered with India's most trusted and accredited healthcare institutions</p>
          </div>
          <div className="hospitals-grid">
            {topHospitals.map((hospital, i) => (
              <div key={i} className="hospital-card">
                <div className="hospital-image">
                  <img src={`https://via.placeholder.com/300x180/4f9da6/ffffff?text=${hospital.name.replace(' ', '+')}`} alt={hospital.name} />
                </div>
                <div className="hospital-info">
                  <h3>{hospital.name}</h3>
                  <p className="hospital-location"><i className="fas fa-map-marker-alt"></i> {hospital.location}</p>
                  <p className="hospital-specialties">{hospital.specialties}</p>
                  <StarRating rating={hospital.rating} />
                  <Link to={`/hospitals/${hospital.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-sm">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/hospitals" className="btn btn-outline">View All Hospitals</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services for International Patients</h2>
            <p>Complete assistance throughout your medical journey in India</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">
                  {i === 0 && "📄"}
                  {i === 1 && "👨‍⚕️"}
                  {i === 2 && "✈️"}
                  {i === 3 && "🏨"}
                  {i === 4 && "🌐"}
                  {i === 5 && "📞"}
                </div>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages / Offers */}
      <section className="section packages">
        <div className="container">
          <div className="section-header">
            <h2>Our Packages / Offers</h2>
            <p>All-inclusive treatment packages with travel & accommodation</p>
          </div>
          <div className="packages-grid">
            <div className="package-card featured">
              <div className="package-badge">Popular</div>
              <h3>Complete Health Checkup</h3>
              <div className="package-price">$499 <span>/ package</span></div>
              <ul>
                <li><i className="fas fa-check"></i> 50+ Health Tests</li>
                <li><i className="fas fa-check"></i> Doctor Consultation</li>
                <li><i className="fas fa-check"></i> 3 Nights Hotel Stay</li>
                <li><i className="fas fa-check"></i> Airport Transfer</li>
              </ul>
              <Link to="/packages" className="btn btn-primary">View Details</Link>
            </div>
            <div className="package-card">
              <h3>Knee Replacement Package</h3>
              <div className="package-price">$5,500 <span>/ package</span></div>
              <ul>
                <li><i className="fas fa-check"></i> Surgery & Hospital Stay</li>
                <li><i className="fas fa-check"></i> 10 Days Physiotherapy</li>
                <li><i className="fas fa-check"></i> 7 Nights Hotel Stay</li>
                <li><i className="fas fa-check"></i> Airport Transfer</li>
              </ul>
              <Link to="/packages" className="btn btn-outline">View Details</Link>
            </div>
            <div className="package-card">
              <h3>Cardiac Bypass Package</h3>
              <div className="package-price">$6,800 <span>/ package</span></div>
              <ul>
                <li><i className="fas fa-check"></i> Surgery & ICU Stay</li>
                <li><i className="fas fa-check"></i> Pre-op Consultations</li>
                <li><i className="fas fa-check"></i> 10 Nights Hotel Stay</li>
                <li><i className="fas fa-check"></i> Airport Transfer</li>
              </ul>
              <Link to="/packages" className="btn btn-outline">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Patients Say</h2>
            <p>Real stories from patients who trusted us for their medical journey</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} index={i} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/testimonials" className="btn btn-outline">Read More Stories</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Medical Journey?</h2>
            <p>Get free consultation from our medical experts. No obligation, just expert advice.</p>
            <div className="cta-buttons">
              <Link to="/enquiry" className="btn btn-primary btn-large">Send Enquiry</Link>
              <a href="https://wa.me/919876543210" className="btn btn-whatsapp btn-large" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}