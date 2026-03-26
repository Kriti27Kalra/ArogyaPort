// pages/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Reasons to Choose India for Medical Treatment",
    excerpt: "Discover why India has become the world's leading medical tourism destination with world-class facilities at affordable costs.",
    date: "March 15, 2025",
    category: "Medical Tourism",
    image: "🏥",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding Knee Replacement Surgery: A Complete Guide",
    excerpt: "Everything you need to know about knee replacement surgery, from pre-op preparation to recovery and rehabilitation.",
    date: "March 10, 2025",
    category: "Orthopedics",
    image: "🦴",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Heart Health: Preventing Cardiovascular Diseases",
    excerpt: "Learn about risk factors, prevention strategies, and modern treatment options for heart conditions.",
    date: "March 5, 2025",
    category: "Cardiology",
    image: "❤️",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Medical Visa Guide: How to Get Your Visa for India",
    excerpt: "Step-by-step guide to obtaining a medical visa for India, including required documents and processing time.",
    date: "February 28, 2025",
    category: "Travel Guide",
    image: "🛂",
    readTime: "4 min read"
  }
];

export default function Blog() {
  return (
    <main className="blog-page">
      <div className="container">
        <div className="section-header">
          <h1>Health & Medical Tourism Blog</h1>
          <p>Stay informed with the latest in healthcare and medical tourism</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">{post.image}</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="read-time"><i className="fas fa-clock"></i> {post.readTime}</span>
                  <Link to={`/blog/${post.id}`} className="read-more">Read More →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}