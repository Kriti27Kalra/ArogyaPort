// src/components/AdminPanel/AdminDashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

const stats = [
  { label: 'Total Enquiries', value: '156', icon: 'fas fa-envelope', change: '+12%', color: '#3b82f6' },
  { label: 'Active Hospitals', value: '48', icon: 'fas fa-hospital', change: '+3', color: '#10b981' },
  { label: 'Total Doctors', value: '234', icon: 'fas fa-user-md', change: '+8', color: '#f59e0b' },
  { label: 'Completed Treatments', value: '1,245', icon: 'fas fa-stethoscope', change: '+23%', color: '#ef4444' },
];

const recentEnquiries = [
  { id: 1, name: 'Mohammed Al-Farsi', treatment: 'Cardiac Surgery', date: '2024-03-20', status: 'pending' },
  { id: 2, name: 'Sarah Johnson', treatment: 'Knee Replacement', date: '2024-03-19', status: 'contacted' },
  { id: 3, name: 'Dr. Abdul Rahman', treatment: 'General Checkup', date: '2024-03-18', status: 'approved' },
];

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="container">
        <h1>Admin Dashboard</h1>
        
        <div className="admin-stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: stat.color }}>
                <i className={stat.icon}></i>
              </div>
              <div className="admin-stat-info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
                <span className="admin-stat-change">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="admin-sections">
          <div className="admin-section">
            <h2>Recent Enquiries</h2>
            <table className="admin-table">
              <thead>
                <tr><th>Name</th><th>Treatment</th><th>Date</th><th>Status</th><th>Action</th></tr>
              </thead>
              <tbody>
                {recentEnquiries.map(enquiry => (
                  <tr key={enquiry.id}>
                    <td>{enquiry.name}</td>
                    <td>{enquiry.treatment}</td>
                    <td>{enquiry.date}</td>
                    <td><span className={`status-badge ${enquiry.status}`}>{enquiry.status}</span></td>
                    <td><Link to={`/admin/enquiries/${enquiry.id}`} className="btn btn-sm">View</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="admin-actions">
            <h2>Quick Actions</h2>
            <div className="admin-actions-grid">
              <Link to="/admin/hospitals" className="admin-action-card">
                <i className="fas fa-hospital"></i>
                <span>Manage Hospitals</span>
              </Link>
              <Link to="/admin/doctors" className="admin-action-card">
                <i className="fas fa-user-md"></i>
                <span>Manage Doctors</span>
              </Link>
              <Link to="/admin/treatments" className="admin-action-card">
                <i className="fas fa-stethoscope"></i>
                <span>Manage Treatments</span>
              </Link>
              <Link to="/admin/packages" className="admin-action-card">
                <i className="fas fa-box"></i>
                <span>Manage Packages</span>
              </Link>
              <Link to="/admin/blogs" className="admin-action-card">
                <i className="fas fa-blog"></i>
                <span>Manage Blogs</span>
              </Link>
              <Link to="/admin/testimonials" className="admin-action-card">
                <i className="fas fa-star"></i>
                <span>Manage Testimonials</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}