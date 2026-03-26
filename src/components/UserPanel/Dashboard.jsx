// src/components/UserPanel/Dashboard.jsx
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './UserPanel.css';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: 'fas fa-chart-line', path: '/dashboard' },
    { id: 'profile', label: 'My Profile', icon: 'fas fa-user', path: '/profile' },
    { id: 'enquiries', label: 'My Enquiries', icon: 'fas fa-envelope', path: '/my-enquiries' },
    { id: 'favorites', label: 'Favorites', icon: 'fas fa-heart', path: '/favorites' },
    { id: 'bookings', label: 'My Bookings', icon: 'fas fa-calendar-check', path: '/bookings' },
  ];

  return (
    <div className="user-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome, {user?.name || 'Patient'}!</h1>
          <button onClick={logout} className="btn btn-outline">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>

        <div className="dashboard-grid">
          <aside className="dashboard-sidebar">
            <nav className="dashboard-nav">
              {menuItems.map(item => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`dashboard-nav-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </aside>

          <main className="dashboard-content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}