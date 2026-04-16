// Navbar.jsx - Clean Version with Register Dropdown
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    closeAllMenus();
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setRegisterDropdownOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleRegisterDropdown = () => setRegisterDropdownOpen(!registerDropdownOpen);

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-content">
            {/* Left Side - Contact */}
            <div className="topbar-contact">
              <a href="tel:+919876543210" className="contact-link">
                <i className="fas fa-phone-alt"></i> +91 98765 43210
              </a>
              <a href="mailto:care@medicaltourism.com" className="contact-link">
                <i className="fas fa-envelope"></i> care@medicaltourism.com
              </a>
            </div>

            {/* Right Side - Google Translate */}
            <div className="topbar-translate">
              <div id="google_translate_element"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo with Circular Image */}
            <Link to="/" className="logo" onClick={closeAllMenus}>
              <div className="logo-circle">
                <img 
                  src="/logo2.jpeg" 
                  alt="ArogyaPort Logo" 
                  className="logo-image"
                />
              </div>
              <div className="logo-text">
                <span className="logo-name">ArogyaPort</span>
                <span className="logo-tagline">India Medical Tourism</span>
              </div>
            </Link>

            {/* Navigation Menu */}
            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
              <NavLink to="/" className="nav-link" onClick={closeAllMenus}>
                <span>Home</span>
              </NavLink>
              <NavLink to="/treatments" className="nav-link" onClick={closeAllMenus}>
                <span>Treatments</span>
              </NavLink>
              <NavLink to="/hospitals" className="nav-link" onClick={closeAllMenus}>
                <span>Hospitals</span>
              </NavLink>
              <NavLink to="/doctors" className="nav-link" onClick={closeAllMenus}>
                <span>Doctors</span>
              </NavLink>
              <NavLink to="/packages" className="nav-link" onClick={closeAllMenus}>
                <span>Packages</span>
              </NavLink>
              <NavLink to="/blog" className="nav-link" onClick={closeAllMenus}>
                <span>Blog</span>
              </NavLink>
              <NavLink to="/contact" className="nav-link" onClick={closeAllMenus}>
                <span>Contact</span>
              </NavLink>
            </nav>

            {/* Right Actions */}
            <div className="header-actions">
              <Link to="/enquiry" className="btn-enquiry" onClick={closeAllMenus}>
                <i className="fas fa-paper-plane"></i>
                <span>Enquiry</span>
              </Link>

              {user ? (
                <div className="user-menu">
                  <button className="user-btn" onClick={toggleDropdown}>
                    <span className="user-avatar">{user.name?.charAt(0).toUpperCase()}</span>
                    <span className="user-name">{user.name?.split(' ')[0]}</span>
                    <i className={`fas fa-chevron-${dropdownOpen ? 'up' : 'down'}`}></i>
                  </button>

                  {dropdownOpen && (
                    <div className="dropdown">
                      <div className="dropdown-header">
                        <span className="dropdown-avatar">{user.name?.charAt(0).toUpperCase()}</span>
                        <div className="dropdown-info">
                          <strong>{user.name}</strong>
                          <span>{user.email}</span>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      {user.role === 'admin' ? (
                        <>
                          <Link to="/admin" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-tachometer-alt"></i> Dashboard
                          </Link>
                          <Link to="/admin/hospitals" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-hospital"></i> Hospitals
                          </Link>
                          <Link to="/admin/doctors" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-user-md"></i> Doctors
                          </Link>
                          <Link to="/admin/treatments" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-stethoscope"></i> Treatments
                          </Link>
                        </>
                      ) : user.role === 'doctor' ? (
                        <>
                          <Link to="/doctor-dashboard" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-tachometer-alt"></i> Dashboard
                          </Link>
                          <Link to="/doctor-profile" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-user-md"></i> Profile
                          </Link>
                          <Link to="/appointments" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-calendar-check"></i> Appointments
                          </Link>
                          <Link to="/patients" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-users"></i> My Patients
                          </Link>
                          <Link to="/earnings" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-rupee-sign"></i> Earnings
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link to="/dashboard" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-tachometer-alt"></i> Dashboard
                          </Link>
                          <Link to="/profile" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-user"></i> Profile
                          </Link>
                          <Link to="/my-enquiries" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-envelope"></i> Enquiries
                          </Link>
                          <Link to="/favorites" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-heart"></i> Favorites
                          </Link>
                          <Link to="/bookings" className="dropdown-link" onClick={closeAllMenus}>
                            <i className="fas fa-calendar"></i> Bookings
                          </Link>
                        </>
                      )}
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-link logout" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link to="/login" className="btn-login" onClick={closeAllMenus}>
                    <i className="fas fa-sign-in-alt"></i>
                    <span>Login</span>
                  </Link>
                  
                  {/* Register Dropdown */}
                  <div className="register-dropdown">
                    <button className="btn-register" onClick={toggleRegisterDropdown}>
                      <i className="fas fa-user-plus"></i>
                      <span>Register</span>
                      <i className={`fas fa-chevron-${registerDropdownOpen ? 'up' : 'down'}`}></i>
                    </button>
                    
                    {registerDropdownOpen && (
                      <div className="register-dropdown-menu">
                        <Link to="/register/patient" className="register-dropdown-item" onClick={closeAllMenus}>
                          <i className="fas fa-user"></i>
                          <div>
                            <strong>Register as Patient</strong>
                            <span>Get access to medical services</span>
                          </div>
                        </Link>
                        <Link to="/register/doctor" className="register-dropdown-item" onClick={closeAllMenus}>
                          <i className="fas fa-user-md"></i>
                          <div>
                            <strong>Register as Doctor</strong>
                            <span>Join our network of experts</span>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Hamburger */}
              <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {menuOpen && <div className="mobile-overlay" onClick={closeAllMenus}></div>}
      </header>
    </>
  );
}