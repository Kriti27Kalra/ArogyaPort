// src/components/WhatsAppButton.jsx
import React from 'react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const phoneNumber = '919876543210';
  const message = 'Hello! I need information about medical treatment in India.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}