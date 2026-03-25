import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/doctors', label: 'Our Doctors' },
  { to: '/international-patients', label: 'International Patients' },
  { to: '/medical-tourism', label: 'Medical Tourism' },
  { to: '/contact', label: 'Contact' },
];

const medicalTourismLinks = [
  { icon: '✈️', label: 'Visa Assistance' },
  { icon: '🏨', label: 'Hotel Stay' },
  { icon: '🚗', label: 'Airport Transfer' },
  { icon: '🌐', label: 'Interpreters' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTourismDropdown, setShowTourismDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setShowTourismDropdown(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <div className="topbar-info">
              <i className="fas fa-envelope"></i>
              <span>care@arogyaport.com</span>
            </div>
            <div className="topbar-info">
              <i className="fas fa-phone-alt"></i>
              <span>+91 98765 43210</span>
            </div>
            <div className="topbar-info">
              <i className="fas fa-clock"></i>
              <span>24/7 Emergency Care</span>
            </div>
          </div>
          <div className="topbar-right">
            
            <div className="topbar-social">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`navbar-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">🩺</div>
            <div className="logo-text">
              <span className="logo-main">Arogyaport</span>
              <span className="logo-sub">India International Pvt. Ltd.</span>
              <span className="logo-tagline">Global Healthcare Excellence</span>
            </div>
          </Link>

          <nav className={`nav-menu${menuOpen ? ' open' : ''}`}>
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            
            {/* Medical Tourism Dropdown */}
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setShowTourismDropdown(true)}
              onMouseLeave={() => setShowTourismDropdown(false)}
            >
              <span className="nav-link dropdown-trigger">
                Quick Services <i className="fas fa-chevron-down"></i>
              </span>
              {showTourismDropdown && (
                <div className="dropdown-menu">
                  {medicalTourismLinks.map((item, idx) => (
                    <Link key={idx} to="/medical-tourism" className="dropdown-item">
                      <span className="dropdown-icon">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  <div className="dropdown-divider"></div>
                  <Link to="/medical-tourism" className="dropdown-item highlight">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Plan Your Journey</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* <div className="navbar-actions">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            <Link to="/consultation" className="btn btn-primary btn-sm">
              <i className="fas fa-calendar-check"></i>
              <span>Free Consultation</span>
            </Link>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(m => !m)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div> */}
        </div>

        {/* Mobile overlay */}
        {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
      </header>
    </>
  );
}