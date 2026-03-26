// pages/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "Why should I choose India for medical treatment?",
    answer: "India offers world-class medical facilities at 60-80% lower costs compared to Western countries. With JCI-accredited hospitals, English-speaking doctors, and no waiting time for surgeries, India has become a top medical tourism destination."
  },
  {
    question: "How do I get a medical visa for India?",
    answer: "We provide a free medical visa invitation letter from the hospital, which you need for your visa application. The process usually takes 3-5 working days. Our team will guide you through the entire visa process."
  },
  {
    question: "What is the cost of treatment in India?",
    answer: "Treatment costs vary depending on the procedure and hospital. Generally, you can save 60-80% compared to US/UK prices. For example, heart bypass costs around $6,000-8,000, knee replacement $5,000-7,000. We provide detailed cost estimates before your arrival."
  },
  {
    question: "Do doctors in India speak English?",
    answer: "Yes, all our partner doctors are fluent in English. Many have trained or worked in the US, UK, and other Western countries. Our coordinators also provide language interpreters if needed."
  },
  {
    question: "How do I get to India and where will I stay?",
    answer: "We provide airport pickup and drop services. We can arrange comfortable accommodation near the hospital ranging from budget hotels to luxury serviced apartments, depending on your preferences and budget."
  },
  {
    question: "What about post-treatment follow-up?",
    answer: "We provide comprehensive post-treatment care including follow-up consultations via telemedicine, physiotherapy if needed, and coordination with your local doctors back home."
  },
  {
    question: "Can my family accompany me?",
    answer: "Yes, family members can accompany you. We provide medical attendant visas and can arrange accommodation for your family. We also offer special packages that include travel and stay for attendants."
  },
  {
    question: "How do I get started?",
    answer: "Simply fill our enquiry form with your medical condition and reports. Our medical experts will review your case and provide a free consultation with recommended treatment plan and cost estimate."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="faq-page">
      <div className="container">
        <div className="section-header">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about medical tourism in India</p>
        </div>

        <div className="faq-grid">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-sidebar">
            <div className="contact-card">
              <h3>Still Have Questions?</h3>
              <p>Our medical tourism experts are here to help you</p>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
              <a href="https://wa.me/919876543210" className="btn btn-outline" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}