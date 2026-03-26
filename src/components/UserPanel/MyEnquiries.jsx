// src/components/UserPanel/MyEnquiries.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserPanel.css';

const sampleEnquiries = [
  {
    id: 1,
    treatment: 'Cardiac Surgery',
    hospital: 'Max Hospital',
    date: '2024-03-20',
    status: 'pending',
    message: 'I need information about bypass surgery cost and recovery time.'
  },
  {
    id: 2,
    treatment: 'Knee Replacement',
    hospital: 'Jaypee Hospital',
    date: '2024-03-15',
    status: 'contacted',
    message: 'Looking for robotic knee replacement options.'
  },
  {
    id: 3,
    treatment: 'General Checkup',
    hospital: 'Fortis Escorts',
    date: '2024-03-10',
    status: 'approved',
    message: 'Complete health checkup package details needed.'
  }
];

export default function MyEnquiries() {
  const [enquiries, setEnquiries] = useState(sampleEnquiries);

  const getStatusBadge = (status) => {
    const statuses = {
      pending: { class: 'status-pending', text: 'Pending' },
      contacted: { class: 'status-contacted', text: 'Contacted' },
      approved: { class: 'status-approved', text: 'Approved' },
      rejected: { class: 'status-rejected', text: 'Rejected' }
    };
    return statuses[status] || statuses.pending;
  };

  return (
    <div className="my-enquiries">
      <div className="section-header">
        <h2>My Enquiries</h2>
        <Link to="/enquiry" className="btn btn-primary">New Enquiry</Link>
      </div>

      {enquiries.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-envelope-open-text"></i>
          <p>No enquiries yet</p>
          <Link to="/enquiry" className="btn btn-primary">Submit Your First Enquiry</Link>
        </div>
      ) : (
        <div className="enquiries-list">
          {enquiries.map(enquiry => (
            <div key={enquiry.id} className="enquiry-card">
              <div className="enquiry-header">
                <div>
                  <h3>{enquiry.treatment}</h3>
                  <p className="hospital-name">{enquiry.hospital}</p>
                </div>
                <span className={`status-badge ${getStatusBadge(enquiry.status).class}`}>
                  {getStatusBadge(enquiry.status).text}
                </span>
              </div>
              <p className="enquiry-message">{enquiry.message}</p>
              <div className="enquiry-footer">
                <span className="enquiry-date">
                  <i className="fas fa-calendar"></i> {new Date(enquiry.date).toLocaleDateString()}
                </span>
                <Link to={`/enquiry/${enquiry.id}`} className="view-details">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}