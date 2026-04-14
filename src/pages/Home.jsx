// Home.jsx - Enhanced Professional Version with Ayurveda Section & Cream Theme
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import TreatmentsSection from './TreatmentsSection';

// --- Data Section ---
const stats = [
  { value: "3000+", label: "Happy Patients",  target: 3000, suffix: "+" },
  { value: "50+", label: "Top Hospitals", target: 50, suffix: "+" },
  { value: "200+", label: "Top Doctors", target: 200, suffix: "+" },
  { value: "10+", label: "Destinations", target: 10, suffix: "+" },
  { value: "20%", label: "Savings", target: 20, suffix: "%" },
];

const topHospitals = [
  { name: "Max Hospital", location: "Delhi NCR", specialties: "Multi-specialty", rating: 4.8, established: 2001, beds: 500, image: "ap1.jpeg" },
  { name: "Jaypee Hospital", location: "Noida", specialties: "Cardiac, Ortho", rating: 4.7, established: 2014, beds: 1200, image: "ap2.jpeg" },
  { name: "Fortis Escorts", location: "Delhi", specialties: "Cardiac, Neurology", rating: 4.9, established: 1988, beds: 500, image: "ap1.jpeg" },
  { name: "BLK Hospital", location: "Delhi", specialties: "Oncology, Transplant", rating: 4.8, established: 1959, beds: 650, image: "ap2.jpeg" },
  { name: "Artemis Hospital", location: "Gurugram", specialties: "Multi-specialty", rating: 4.7, established: 2007, beds: 500, image: "ap1.jpeg" },
  { name: "Apollo Hospitals", location: "Chennai/Delhi", specialties: "Multi-specialty", rating: 4.9, established: 1983, beds: 1000, image: "ap2.jpeg" },
];

const testimonials = [
  { name: "Suman Ahmed", from: "Bangladesh", hospital: "Max Hospital", treatment: "Kidney Transplant", text: "I choose ArogyaPort to organize my brother's KIDNEY TRANSPLANT in Max Hospital, New Delhi. Their team was exceptional from the moment we arrived until we left. The travel assistant was lovely and the doctor was amazing.", rating: 5, date: "March 2024" },
  { name: "Dr. Abdul Rahman", from: "Ethiopia", hospital: "BLK HOSPITAL", treatment: "General Surgery", text: "I'm a General Surgeon from Ethiopia who came for my mother-in-law's surgery. Mohammad Tariqe from ArogyaPort coordinated everything perfectly, helping us get the best quality treatment at an affordable cost.", rating: 5, date: "February 2024" },
  { name: "Mizan Rahman", from: "Bangladesh", hospital: "Fortis Escort Hospital", treatment: "Cardiac Surgery", text: "I was confused about choosing the best surgeon for my father-in-law's cardiac surgery. ArogyaPort helped me select the best hospital and best cardiac surgeon in India with very good cost.", rating: 5, date: "January 2024" },
  { name: "Merag Tadese", from: "Ethiopia", hospital: "Jaypee Hospital", treatment: "Health Check-up", text: "ArogyaPort offered me a complete package including airport pickup, hotel services, and 24/7 assistance. They guided me to choose the best hospital with top doctors at the best cost.", rating: 5, date: "December 2023" },
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
  { icon: "📄", title: "Free Medical Visa Invitation Letter", description: "Complete visa assistance for medical travel" },
  { icon: "👨‍⚕️", title: "Appointment with Top Doctors", description: "Consultations with India's best specialists" },
  { icon: "✈️", title: "Free Airport Pick-up & Drop", description: "Hassle-free arrival and departure" },
  { icon: "🏨", title: "Hotel/Apartment Booking", description: "Comfortable accommodation near hospitals" },
  { icon: "🌐", title: "24/7 Interpreter Assistance", description: "Language support throughout your stay" },
  { icon: "📞", title: "Post-Treatment Follow-up", description: "Continued care after returning home" },
];

// Ayurvedic Treatments Data
const ayurvedicTreatments = [
  { name: "Panchakarma Therapy", icon: "🌿", description: "Detoxification & rejuvenation treatment", duration: "14-21 days", benefits: "Removes toxins, boosts immunity" },
  { name: "Abhyanga Massage", icon: "🫶", description: "Full body herbal oil massage", duration: "45-60 min", benefits: "Stress relief, improved circulation" },
  { name: "Shirodhara", icon: "💆", description: "Warm oil flow on forehead", duration: "30-45 min", benefits: "Mental clarity, anxiety relief" },
  { name: "Yoga & Meditation", icon: "🧘", description: "Traditional wellness practices", duration: "Daily sessions", benefits: "Mind-body harmony, flexibility" },
  { name: "Rasayana Therapy", icon: "🍃", description: "Rejuvenation & anti-aging", duration: "21-28 days", benefits: "Vitality, cellular regeneration" },
  { name: "Ayurvedic Diet Plan", icon: "🥗", description: "Personalized nutrition guidance", duration: "Customized", benefits: "Digestive health, weight management" },
];

// --- Helper Components ---
function StarRating({ rating = 4.5, size = "small" }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <i 
          key={i} 
          className={`fas fa-star${i < fullStars ? '' : (i === fullStars && hasHalf ? '-half-alt' : '-o')}`}
        ></i>
      ))}
    </div>
  );
}

// Counter Component with Intersection Observer
function Counter({ target, suffix = "+", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={counterRef} className="stat-number">
      {count}{suffix}
    </div>
  );
}

// Scroll Animation Hook
function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    
    elements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
}

// --- Main Home Component ---
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef(null);

  useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-page">
      {/* Hero Section with Video Background */}
      <section className="hero" ref={heroRef}>
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1920&h=1080&fit=crop"
        >
          <source src="/health.mp4" type="video/mp4" />
          <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1920&h=1080&fit=crop" alt="Medical Tourism Background" />
        </video>
        
        <div className="container">
          <div className="hero-content">
           
            <h1 className="hero-title scroll-animate">
              Caring beyond <span className="highlight">Borders</span>
            </h1>
            <p className="hero-subtitle scroll-animate">
              <span className="tagline-primary">Global Standards • Indian Hospitality</span><br />
              World-Class Medical Care at Affordable Costs with Complete Travel & Treatment Assistance
            </p>
            <form className="hero-search scroll-animate" onSubmit={handleSearch}>
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input 
                  type="text" 
                  placeholder="Search Treatment, Hospital or Doctor..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Search</button>
              </div>
            </form>
            
          </div>
        </div>
        <div className="hero-wave">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,248,235,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,248,235,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,248,235,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,248,235,0.2)" />
            </g>
          </svg>
        </div>
      </section>

     {/* Stats Section with Marquee Animation */}
<section className="stats-marquee-section">
  <div className="container">
    <div className="stats-marquee-header scroll-animate">
      <span className="stats-badge">Our Impact in Numbers</span>
      <h2>Delivering Excellence in Medical Care</h2>
      <p>Transforming healthcare journeys with trust, expertise, and compassionate care</p>
    </div>
  </div>
  
  <div className="stats-marquee-wrapper">
    <div className="stats-marquee-track">
      {/* First set of stats */}
      {stats.map((stat, i) => (
        <div key={`stat-${i}`} className="stats-marquee-card">
          <div 
            className="stats-card-bg"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/${i % 2 === 0 ? 'ap1.jpeg' : 'ap2.jpeg'})`
            }}
          >
            <div className="stats-card-overlay"></div>
          </div>
          <div className="stats-card-content">
            <div className="stats-card-icon">{stat.icon}</div>
            <div className="stats-card-number">
              <Counter target={parseInt(stat.value)} suffix={stat.suffix} duration={2000} />
            </div>
            <div className="stats-card-label">{stat.label}</div>
            <div className="stats-card-progress">
              <div className="progress-bar-fill" style={{ width: `${(i + 1) * 20}%` }}></div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Duplicate set for seamless loop */}
      {stats.map((stat, i) => (
        <div key={`stat-duplicate-${i}`} className="stats-marquee-card">
          <div 
            className="stats-card-bg"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/${i % 2 === 0 ? 'ap1.jpeg' : 'ap2.jpeg'})`
            }}
          >
            <div className="stats-card-overlay"></div>
          </div>
          <div className="stats-card-content">
            <div className="stats-card-icon">{stat.icon}</div>
            <div className="stats-card-number">
              <Counter target={parseInt(stat.value)} suffix={stat.suffix} duration={2000} />
            </div>
            <div className="stats-card-label">{stat.label}</div>
            <div className="stats-card-progress">
              <div className="progress-bar-fill" style={{ width: `${(i + 1) * 20}%` }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Popular Treatments */}
      <TreatmentsSection />
      
      {/* Ayurvedic Treatments Section - New */}
      <section className="section ayurveda">
        <div className="container">
          <div className="section-header scroll-animate">
            <h2>Ancient Wisdom for Modern Wellness</h2>
            <p>Experience the healing power of Ayurveda - India's timeless gift to the world</p>
          </div>
          <div className="ayurveda-grid">
            {ayurvedicTreatments.map((treatment, i) => (
              <div key={i} className="ayurveda-card scroll-animate" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="ayurveda-icon">{treatment.icon}</div>
                <h3>{treatment.name}</h3>
                <p className="ayurveda-desc">{treatment.description}</p>
                <div className="ayurveda-meta">
                  <span className="duration"><i className="far fa-clock"></i> {treatment.duration}</span>
                  <span className="benefits"><i className="fas fa-leaf"></i> {treatment.benefits}</span>
                </div>
                <Link to="/ayurveda" className="learn-more">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose India */}
      <section className="section why-india">
        <div className="container">
          <div className="why-india-grid">
            <div className="why-india-content scroll-animate">
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
            <div className="why-india-image scroll-animate">
              <img src="/ap1.jpeg" alt="Indian Hospital" />
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
          <div className="section-header scroll-animate">
            <h2>Top Hospitals in India</h2>
            <p>Partnered with India's most trusted and accredited healthcare institutions</p>
          </div>
          <div className="hospitals-grid">
            {topHospitals.map((hospital, i) => (
              <div key={i} className="hospital-card scroll-animate" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="hospital-image">
                  <img src={`/${hospital.image}`} alt={hospital.name} />
                </div>
                <div className="hospital-info">
                  <h3>{hospital.name}</h3>
                  <p className="hospital-location"><i className="fas fa-map-marker-alt"></i> {hospital.location}</p>
                  <p className="hospital-specialties"><i className="fas fa-stethoscope"></i> {hospital.specialties}</p>
                  <div className="hospital-meta">
                    <span><i className="fas fa-calendar"></i> Est. {hospital.established}</span>
                    <span><i className="fas fa-bed"></i> {hospital.beds}+ Beds</span>
                  </div>
                  <StarRating rating={hospital.rating} />
                  <Link to={`/hospitals/${hospital.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-sm">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta scroll-animate">
            <Link to="/hospitals" className="btn btn-outline">View All Hospitals</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services">
        <div className="container">
          <div className="section-header scroll-animate">
            <h2>Our Services for International Patients</h2>
            <p>Complete assistance throughout your medical journey in India</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card scroll-animate" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages / Offers */}
      <section className="section packages">
        <div className="container">
          <div className="section-header scroll-animate">
            <h2>Our Packages / Offers</h2>
            <p>All-inclusive treatment packages with travel & accommodation</p>
          </div>
          <div className="packages-grid">
            <div className="package-card featured scroll-animate">
              <div className="package-badge">Popular</div>
              <h3>Complete Health Checkup</h3>
              <div className="package-price">$499 <span>/ package</span></div>
              <ul>
                <li><i className="fas fa-check-circle"></i> 50+ Health Tests</li>
                <li><i className="fas fa-check-circle"></i> Doctor Consultation</li>
                <li><i className="fas fa-check-circle"></i> 3 Nights Hotel Stay</li>
                <li><i className="fas fa-check-circle"></i> Airport Transfer</li>
              </ul>
              <Link to="/packages" className="btn btn-primary">View Details</Link>
            </div>
            <div className="package-card scroll-animate">
              <h3>Knee Replacement Package</h3>
              <div className="package-price">$5,500 <span>/ package</span></div>
              <ul>
                <li><i className="fas fa-check-circle"></i> Surgery & Hospital Stay</li>
                <li><i className="fas fa-check-circle"></i> 10 Days Physiotherapy</li>
                <li><i className="fas fa-check-circle"></i> 7 Nights Hotel Stay</li>
                <li><i className="fas fa-check-circle"></i> Airport Transfer</li>
              </ul>
              <Link to="/packages" className="btn btn-outline">View Details</Link>
            </div>
            <div className="package-card scroll-animate">
              <h3>Cardiac Bypass Package</h3>
              <div className="package-price">$6,800 <span>/ package</span></div>
              <ul>
                <li><i className="fas fa-check-circle"></i> Surgery & ICU Stay</li>
                <li><i className="fas fa-check-circle"></i> Pre-op Consultations</li>
                <li><i className="fas fa-check-circle"></i> 10 Nights Hotel Stay</li>
                <li><i className="fas fa-check-circle"></i> Airport Transfer</li>
              </ul>
              <Link to="/packages" className="btn btn-outline">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* Testimonials Section - Enhanced Design */}
<section className="section testimonials-enhanced">
  <div className="testimonials-bg-pattern"></div>
  <div className="container">
    <div className="section-header scroll-animate">
      <span className="testimonials-badge">Patient Stories</span>
      <h2>What Our Patients Say</h2>
      <p>Real stories from patients who trusted us for their medical journey</p>
    </div>
    
    <div className="testimonials-carousel-enhanced">
      <div className="testimonials-track-enhanced" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {testimonials.map((testimonial, i) => (
          <div key={i} className="testimonial-slide-enhanced">
            <div className="testimonial-card-enhanced">
              {/* Quote Icon */}
              <div className="testimonial-quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              
              <div className="testimonial-header-enhanced">
                <div className="testimonial-avatar-enhanced">
                  {testimonial.name.charAt(0).toUpperCase()}
                  <div className="avatar-ring"></div>
                </div>
                <div className="testimonial-info-enhanced">
                  <h4>{testimonial.name}</h4>
                  <div className="testimonial-meta">
                    <span className="meta-location">
                      <i className="fas fa-map-marker-alt"></i> {testimonial.from}
                    </span>
                    <span className="meta-treatment">
                      <i className="fas fa-stethoscope"></i> {testimonial.treatment}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="testimonial-text-enhanced">
                <i className="fas fa-quote-right quote-right"></i>
                {testimonial.text}
              </p>
              
              <div className="testimonial-footer-enhanced">
                <div className="testimonial-hospital-enhanced">
                  <i className="fas fa-hospital"></i>
                  <span>{testimonial.hospital}</span>
                </div>
                <StarRating rating={testimonial.rating} />
                <div className="testimonial-date-enhanced">
                  <i className="far fa-calendar-alt"></i>
                  <span>{testimonial.date}</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="testimonial-decoration">
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button 
        className="testimonial-nav prev" 
        onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        className="testimonial-nav next" 
        onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      
      <div className="testimonial-dots-enhanced">
        {testimonials.map((_, i) => (
          <button 
            key={i} 
            className={`dot-enhanced ${activeIndex === i ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
          >
            <span className="dot-progress"></span>
          </button>
        ))}
      </div>
    </div>
    
    <div className="section-cta scroll-animate">
      <Link to="/testimonials" className="btn btn-primary">
        <i className="fas fa-star"></i> Read More Stories
        <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content scroll-animate">
            <h2>Ready to Start Your Medical Journey?</h2>
            <p>Get free consultation from our medical experts. No obligation, just expert advice.</p>
            <div className="cta-buttons">
              <Link to="/enquiry" className="btn btn-primary btn-large">
                <i className="fas fa-paper-plane"></i> Send Enquiry
              </Link>
              <a href="https://wa.me/919876543210" className="btn btn-whatsapp btn-large" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </main>
  );
}