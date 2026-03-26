// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Demo credentials
      if (email === 'admin@medicaltourism.com' && password === 'admin123') {
        const adminUser = { id: 1, name: 'Admin User', email, role: 'admin' };
        localStorage.setItem('medical_tourism_user', JSON.stringify(adminUser));
        login(adminUser);
        navigate('/admin');
      } else if (email === 'user@medicaltourism.com' && password === 'user123') {
        const normalUser = { id: 2, name: 'John Doe', email, role: 'user' };
        localStorage.setItem('medical_tourism_user', JSON.stringify(normalUser));
        login(normalUser);
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-card">
          <h2>Login to Your Account</h2>
          <p className="auth-subtitle">Welcome back! Please login to continue</p>
          
          {error && <div className="alert alert-error">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            
            <div className="auth-options">
              <label className="checkbox">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
            </div>
            
            <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
           
          </div>
        </div>
      </div>
    </div>
  );
}