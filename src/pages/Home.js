import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const heroSlides = [
  {
    title: "World-Class Healthcare in India",
    subtitle: "Advanced medical treatments, compassionate care, and holistic wellness for patients from across the globe.",
    cta: "Get Free Consultation",
    ctaLink: "/consultation",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
    icon: "🏥",
  },
  {
    title: "Medical Tourism Excellence",
    subtitle: "Comprehensive care packages including treatment, accommodation, visa assistance, and airport transfers.",
    cta: "Explore Packages",
    ctaLink: "/medical-tourism",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
    icon: "✈️",
  },
  {
    title: "Top-Rated Specialists",
    subtitle: "400+ renowned doctors, 50+ specialties, and JCI-accredited facilities for international standards of care.",
    cta: "Meet Our Doctors",
    ctaLink: "/doctors",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
    icon: "👨‍⚕️",
  },
];

const treatments = [
  { name: "Cardiac Surgery", icon: "❤️", specialists: 24, success: "98.5%", popular: true },
  { name: "Orthopedic Surgery", icon: "🦴", specialists: 18, success: "97.2%", popular: true },
  { name: "Neurology & Neurosurgery", icon: "🧠", specialists: 22, success: "96.8%", popular: false },
  { name: "Oncology", icon: "🎗️", specialists: 31, success: "94.5%", popular: true },
  { name: "Organ Transplant", icon: "🫀", specialists: 15, success: "92.3%", popular: false },
  { name: "Spine Surgery", icon: "🦿", specialists: 12, success: "96.1%", popular: false },
  { name: "Bariatric Surgery", icon: "⚖️", specialists: 9, success: "98.9%", popular: false },
  { name: "Fertility & IVF", icon: "👶", specialists: 14, success: "85.7%", popular: false },
];

const doctors = [
  { name: "Dr. Arjun Mehta", specialty: "Cardiothoracic Surgeon", experience: "24+ years", hospital: "Ayushman Heart Institute", rating: 4.9, image: "👨‍⚕️", country: "India", qualification: "MBBS, MS, MCh" },
  { name: "Dr. Priya Sharma", specialty: "Neurology & Stroke", experience: "18+ years", hospital: "Neuroscience Centre", rating: 4.8, image: "👩‍⚕️", country: "India", qualification: "MBBS, MD, DM" },
  { name: "Dr. Michael Chen", specialty: "Orthopedic Oncology", experience: "15+ years", hospital: "Bone & Joint Centre", rating: 4.9, image: "👨‍⚕️", country: "USA", qualification: "MD, FACS" },
  { name: "Dr. Fatima Al-Rashid", specialty: "Pediatric Cardiology", experience: "20+ years", hospital: "Child Heart Centre", rating: 5.0, image: "👩‍⚕️", country: "UAE", qualification: "MBBS, MD, FRCP" },
];

const medicalTourismServices = [
  { icon: "✈️", title: "Airport Transfers", desc: "Complimentary pickup & drop from Delhi/Jaipur International Airport" },
  { icon: "🏨", title: "Luxury Accommodation", desc: "5-star hotel stays & serviced apartments for patients & families" },
  { icon: "🛂", title: "Visa Assistance", desc: "Medical visa facilitation & documentation support" },
  { icon: "🌐", title: "Language Interpreters", desc: "Multilingual coordinators for Arabic, English, Russian, French" },
  { icon: "🍽️", title: "Customized Meals", desc: "Dietary-specific meals including international cuisines" },
  { icon: "🚗", title: "Local Concierge", desc: "Sightseeing, shopping, and cultural tours arranged" },
];

const whyChoose = [
  "JCI & NABH Accredited Hospitals",
  "400+ Top Specialists & Super-Specialists",
  "Advanced Robotic Surgery & AI Diagnostics",
  "Affordable Treatment – Up to 70% Savings",
  "Dedicated International Patient Care Team",
  "24/7 Emergency & Trauma Care",
  "Telemedicine & Second Opinions",
  "Holistic Wellness & Rehabilitation",
];

const departments = [
  {
    id: 'cardiology',
    label: 'Cardiology & Cardiac Surgery',
    icon: '❤️',
    desc: 'World-class heart care with advanced Cath labs, robotic surgeries, and minimally invasive procedures. Our cardiac team has performed 15,000+ successful surgeries with international success rates.',
    treatments: ['Bypass Surgery', 'Angioplasty', 'Valve Replacement', 'Pediatric Cardiology'],
  },
  {
    id: 'orthopedics',
    label: 'Orthopedics & Joint Replacement',
    icon: '🦴',
    desc: 'Specialized in robotic joint replacements, sports medicine, and complex trauma care. Using NAVIO and MAKO robotics for precision outcomes with faster recovery.',
    treatments: ['Knee Replacement', 'Hip Replacement', 'Spine Surgery', 'Arthroscopy'],
  },
  {
    id: 'neurology',
    label: 'Neurology & Neurosurgery',
    icon: '🧠',
    desc: 'Comprehensive brain and spine care with advanced neuro-navigation, Gamma Knife, and stroke management. Expert team for epilepsy, movement disorders, and brain tumors.',
    treatments: ['Brain Tumor Surgery', 'Stroke Care', 'Spine Fusion', 'Deep Brain Stimulation'],
  },
  {
    id: 'oncology',
    label: 'Oncology & Cancer Care',
    icon: '🎗️',
    desc: 'Multi-disciplinary cancer care with PET-CT, TrueBeam radiotherapy, and targeted therapies. Dedicated breast, lung, and hematology oncology units.',
    treatments: ['Chemotherapy', 'Radiation Therapy', 'Immunotherapy', 'Surgical Oncology'],
  },
  {
    id: 'transplant',
    label: 'Organ Transplant',
    icon: '🫀',
    desc: 'State-of-the-art liver, kidney, heart, and bone marrow transplant programs. High success rates with experienced transplant coordinators for international patients.',
    treatments: ['Liver Transplant', 'Kidney Transplant', 'Heart Transplant', 'Bone Marrow Transplant'],
  },
];

const testimonials = [
  {
    name: "Mohammed Al-Farsi",
    city: "Dubai, UAE",
    text: "My experience with Ayushman Hospital was exceptional. From visa assistance to post-operative care, everything was seamless. Dr. Mehta performed my bypass surgery, and I'm back to normal life within weeks. Highly recommended for international patients!",
    rating: 5,
    country: "🇦🇪",
  },
  {
    name: "Sarah Johnson",
    city: "London, UK",
    text: "I traveled to India for my knee replacement after NHS waiting times. The hospital arranged everything - hotel, transport, and even a coordinator who spoke English. The robotic surgery was painless and recovery was much faster than expected.",
    rating: 5,
    country: "🇬🇧",
  },
  {
    name: "Amina Hassan",
    city: "Nairobi, Kenya",
    text: "My daughter received cancer treatment here, and we were treated like family. The international patient team arranged our accommodation and even helped with cultural needs. Grateful for the compassionate care and world-class facilities.",
    rating: 5,
    country: "🇰🇪",
  },
  {
    name: "Vladimir Petrov",
    city: "Moscow, Russia",
    text: "Excellent neurosurgeons and modern equipment. The hospital provided Russian-speaking interpreters and organized everything from airport pickup to sightseeing during recovery. Truly a top-tier medical tourism destination.",
    rating: 5,
    country: "🇷🇺",
  },
];

const stats = [
  { value: "400+", label: "Expert Doctors", icon: "👨‍⚕️" },
  { value: "50+", label: "Medical Specialties", icon: "🏥" },
  { value: "25,000+", label: "International Patients", icon: "🌍" },
  { value: "98%", label: "Patient Satisfaction", icon: "⭐" },
  { value: "15+", label: "Partner Hotels", icon: "🏨" },
  { value: "7", label: "JCI Standards", icon: "✅" },
];

function StarRating({ rating = 5 }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className={`fas fa-star${i < rating ? '' : '-o'}`} style={{ color: i < rating ? '#fbbf24' : '#334155' }}></i>
      ))}
    </div>
  );
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [activeDept, setActiveDept] = useState('cardiology');
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.15 }
    );
    cardRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const currentSlide = heroSlides[slide];

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ background: currentSlide.gradient }}>
        <div className="hero-overlay"></div>
        <div className="hero-content container fade-up">
          <div className="hero-icon">{currentSlide.icon}</div>
          <h1>{currentSlide.title}</h1>
          <p>{currentSlide.subtitle}</p>
          <div className="hero-actions">
            <Link to={currentSlide.ctaLink} className="btn btn-primary">Get Free Consultation</Link>
            <a href="tel:+919876543210" className="btn btn-outline">
              <i className="fas fa-phone-alt"></i> 24/7 Helpline
            </a>
            <Link to="/international-patients" className="btn btn-outline">
              <i className="fas fa-globe"></i> International Patients
            </Link>
          </div>
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button key={i} className={`hero-dot${slide === i ? ' active' : ''}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0f0f12" />
          </svg>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <div className="container quick-grid">
          <Link to="/international-patients" className="quick-card">
            <span className="quick-icon">🌍</span>
            <div><strong>Medical Tourism</strong><p>Complete treatment packages</p></div>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <Link to="/doctors" className="quick-card">
            <span className="quick-icon">👨‍⚕️</span>
            <div><strong>Top Specialists</strong><p>400+ expert doctors</p></div>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <Link to="/accommodation" className="quick-card">
            <span className="quick-icon">🏨</span>
            <div><strong>Hotel & Stay</strong><p>Luxury accommodation</p></div>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <Link to="/contact" className="quick-card">
            <span className="quick-icon">📞</span>
            <div><strong>Free Consultation</strong><p>Get expert advice</p></div>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-pad about-intro">
        <div className="container">
          <div className="badge">Welcome to Ayushman Hospital</div>
          <h1 className="intro-heading">India's Premier Destination for Advanced Medical Care</h1>
          <p className="intro-text">
            Ayushman Hospital stands as a beacon of excellence in healthcare, combining world-class infrastructure with compassionate care. 
            We have treated over 25,000 international patients from 85+ countries, offering cutting-edge treatments at a fraction of Western costs.
            {readMore && (
              <> Our JCI-accredited facilities, multilingual coordinators, and dedicated international patient lounge ensure that every visitor receives personalized attention. 
              From initial consultation to post-treatment wellness, we provide end-to-end support including visa assistance, airport transfers, and luxury accommodation.</>
            )}
            {' '}<button className="read-more-btn" onClick={() => setReadMore(r => !r)}>
              {readMore ? 'Read Less' : 'Read More'}
            </button>
          </p>
          <div className="about-stats">
            <div className="about-stat"><span>85+</span> Countries Served</div>
            <div className="about-stat"><span>25,000+</span> Intl. Patients</div>
            <div className="about-stat"><span>98%</span> Success Rate</div>
          </div>
          <Link to="/about" className="btn btn-primary">Discover Our Excellence</Link>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="section-pad treatments-section">
        <div className="container">
          <div className="section-title">
            <div className="badge">Medical Excellence</div>
            <h2>Specialized Treatments & Procedures</h2>
            <p>Advanced medical care across 50+ specialties with renowned specialists and cutting-edge technology.</p>
          </div>
          <div className="treatments-grid">
            {treatments.map((treatment, i) => (
              <div
                key={i}
                className="treatment-card"
                ref={el => cardRefs.current[i] = el}
              >
                {treatment.popular && <span className="popular-badge">Popular</span>}
                <div className="treatment-icon">{treatment.icon}</div>
                <h4>{treatment.name}</h4>
                <div className="treatment-meta">
                  <span><i className="fas fa-user-md"></i> {treatment.specialists} Specialists</span>
                  <span><i className="fas fa-chart-line"></i> Success: {treatment.success}</span>
                </div>
                <Link to="/treatments" className="btn btn-outline">Learn More</Link>
              </div>
            ))}
          </div>
          <div className="center-btn">
            <Link to="/treatments" className="btn btn-primary">View All Treatments</Link>
          </div>
        </div>
      </section>

      {/* Medical Tourism Services */}
      <section className="section-pad tourism-section">
        <div className="container">
          <div className="section-title">
            <div className="badge">For International Patients</div>
            <h2>Complete Medical Tourism Support</h2>
            <p>End-to-end assistance to make your medical journey comfortable and stress-free.</p>
          </div>
          <div className="tourism-grid">
            {medicalTourismServices.map((service, i) => (
              <div key={i} className="tourism-card">
                <div className="tourism-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad why-section">
        <div className="container">
          <div className="section-title">
            <div className="badge">Why Ayushman</div>
            <h2>Why Choose Us for Your Healthcare Journey?</h2>
            <p>Setting global benchmarks in healthcare delivery with patient-first approach.</p>
          </div>
          <div className="why-grid">
            {whyChoose.map((item, i) => (
              <div key={i} className="why-item">
                <i className="fas fa-check-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="accreditations">
            <div className="accred-badge">JCI Accredited</div>
            <div className="accred-badge">NABH Certified</div>
            <div className="accred-badge">ISO 9001:2025</div>
            <div className="accred-badge">Global Healthcare Excellence</div>
          </div>

          <div className="center-btn">
            <Link to="/contact" className="btn btn-primary">Request Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Doctors */}
      <section className="section-pad doctors-section">
        <div className="container">
          <div className="section-title">
            <div className="badge">Our Specialists</div>
            <h2>Meet Our World-Renowned Doctors</h2>
            <p>Internationally trained specialists bringing global expertise to India.</p>
          </div>
          <div className="doctors-grid">
            {doctors.map((doctor, i) => (
              <div key={i} className="doctor-card">
                <div className="doctor-image">{doctor.image}</div>
                <h4>{doctor.name}</h4>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p className="doctor-qualification">{doctor.qualification}</p>
                <div className="doctor-details">
                  <span><i className="fas fa-clock"></i> {doctor.experience}</span>
                  <span><i className="fas fa-map-marker-alt"></i> {doctor.country}</span>
                </div>
                <StarRating rating={doctor.rating} />
                <Link to={`/doctors/${doctor.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-outline">View Profile</Link>
              </div>
            ))}
          </div>
          <div className="center-btn">
            <Link to="/doctors" className="btn btn-primary">View All Doctors</Link>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-pad departments-section">
        <div className="container">
          <div className="section-title">
            <div className="badge">Centers of Excellence</div>
            <h2>Advanced Specialty Departments</h2>
            <p>Multi-disciplinary care under one roof with integrated treatment approaches.</p>
          </div>
          <div className="dept-layout">
            <div className="dept-tabs">
              {departments.map(d => (
                <button
                  key={d.id}
                  className={`dept-tab${activeDept === d.id ? ' active' : ''}`}
                  onClick={() => setActiveDept(d.id)}
                >
                  <span className="dept-tab-icon">{d.icon}</span>
                  {d.label}
                </button>
              ))}
            </div>
            <div className="dept-content">
              {departments.filter(d => d.id === activeDept).map(d => (
                <div key={d.id} className="dept-panel">
                  <div className="dept-panel-icon">{d.icon}</div>
                  <h3>{d.label}</h3>
                  <p>{d.desc}</p>
                  <div className="treatment-list">
                    {d.treatments.map((t, i) => (
                      <span key={i} className="treatment-tag">{t}</span>
                    ))}
                  </div>
                  <Link to="/appointment" className="btn btn-primary">Consult Specialist</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad testimonials-section">
        <div className="container">
          <div className="section-title">
            <div className="badge">Patient Stories</div>
            <h2>What Our International Patients Say</h2>
            <p>Real experiences from patients who chose India for their medical journey.</p>
          </div>
          <div className="testimonials-carousel">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>{testimonials[testimonialIdx].text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[testimonialIdx].name.charAt(0)}
                </div>
                <div>
                  <strong>{testimonials[testimonialIdx].name}</strong>
                  <span>{testimonials[testimonialIdx].city} {testimonials[testimonialIdx].country}</span>
                </div>
              </div>
              <StarRating rating={testimonials[testimonialIdx].rating} />
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot${i === testimonialIdx ? ' active' : ''}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <h2>Start Your Healing Journey Today</h2>
            <p>Get a free consultation with our specialists. We're here to help you 24/7.</p>
            <div className="cta-contact">
              <span><i className="fas fa-phone-alt"></i> +91 98765 43210</span>
              <span><i className="fab fa-whatsapp"></i> WhatsApp: +91 98765 43211</span>
              <span><i className="fas fa-envelope"></i> international@ayushman.com</span>
            </div>
          </div>
          <div className="cta-actions">
            <Link to="/consultation" className="btn btn-primary">Book Free Consultation</Link>
            <Link to="/international-patients" className="btn btn-outline">Travel & Stay Guide</Link>
          </div>
        </div>
      </section>
    </main>
  );
}