// src/components/UserPanel/Bookings.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserPanel.css';

const sampleBookings = [
  {
    id: 1,
    treatment: 'Complete Health Checkup',
    package: 'Health Checkup Package',
    date: '2024-04-15',
    status: 'confirmed',
    amount: 499,
    hospital: 'Max Hospital'
  },
  {
    id: 2,
    treatment: 'Consultation',
    doctor: 'Dr. Arjun Mehta',
    date: '2024-04-10',
    status: 'completed',
    amount: 50,
    hospital: 'Max Hospital'
  }
];

export default function Bookings() {
  const [bookings, setBookings] = useState(sampleBookings);

  const getStatusBadge = (status) => {
    const statuses = {
      confirmed: { class: 'status-confirmed', text: 'Confirmed' },
      completed: { class: 'status-completed', text: 'Completed' },
      cancelled: { class: 'status-cancelled', text: 'Cancelled' },
      pending: { class: 'status-pending', text: 'Pending' }
    };
    return statuses[status] || statuses.pending;
  };

  return (
    <div className="my-bookings">
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-calendar-alt"></i>
          <p>No bookings yet</p>
          <Link to="/packages" className="btn btn-primary">Book a Package</Link>
        </div>
      ) : (
        <div className="bookings-list">
          {bookings.map(booking => (
            <div key={booking.id} className="booking-card">
              <div className="booking-header">
                <div>
                  <h3>{booking.treatment}</h3>
                  <p className="hospital-name">{booking.hospital}</p>
                </div>
                <span className={`status-badge ${getStatusBadge(booking.status).class}`}>
                  {getStatusBadge(booking.status).text}
                </span>
              </div>
              
              <div className="booking-details">
                <div className="detail-item">
                  <i className="fas fa-calendar"></i>
                  <span>Date: {new Date(booking.date).toLocaleDateString()}</span>
                </div>
                {booking.package && (
                  <div className="detail-item">
                    <i className="fas fa-box"></i>
                    <span>Package: {booking.package}</span>
                  </div>
                )}
                {booking.doctor && (
                  <div className="detail-item">
                    <i className="fas fa-user-md"></i>
                    <span>Doctor: {booking.doctor}</span>
                  </div>
                )}
                <div className="detail-item">
                  <i className="fas fa-dollar-sign"></i>
                  <span>Amount: ${booking.amount}</span>
                </div>
              </div>

              <div className="booking-footer">
                <Link to={`/booking/${booking.id}`} className="btn btn-sm">View Details</Link>
                {booking.status === 'confirmed' && (
                  <button className="btn btn-outline btn-sm">Cancel Booking</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}