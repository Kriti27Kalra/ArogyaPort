// src/App.js - Fixed version
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import TreatmentDetail from './pages/TreatmentDetail';
import Hospitals from './pages/Hospitals';
import HospitalDetail from './pages/HospitalDetail';
import Doctors from './pages/Doctors';
import DoctorDetail from './pages/DoctorDetail';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import FAQ from './pages/FAQ';
import About from './pages/About';
import WhyIndia from './pages/WhyIndia';
import Login from './pages/Login';
import PatientRegister from './pages/PatientRegister';
import DoctorRegister from './pages/DoctorRegister';

// User Panel
import Dashboard from './components/UserPanel/Dashboard';
import Profile from './components/UserPanel/Profile';
import MyEnquiries from './components/UserPanel/MyEnquiries';
import Favorites from './components/UserPanel/Favorites';
import Bookings from './components/UserPanel/Bookings';

// Admin Panel
import AdminDashboard from './components/AdminPanel/AdminDashboard';
import ManageHospitals from './components/AdminPanel/ManageHospitals';
import ManageDoctors from './components/AdminPanel/ManageDoctors';
import ManageTreatments from './components/AdminPanel/ManageTreatments';
import ManagePackages from './components/AdminPanel/ManagePackages';
import ManageBlogs from './components/AdminPanel/ManageBlogs';
import ManageEnquiries from './components/AdminPanel/ManageEnquiries';
import ManageTestimonials from './components/AdminPanel/ManageTestimonials';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="main-wrapper">
          <Navbar />
          <div className="content-wrapper">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/why-india" element={<WhyIndia />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/treatments/:id" element={<TreatmentDetail />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/hospitals/:id" element={<HospitalDetail />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:id" element={<DoctorDetail />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/packages/:id" element={<PackageDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/login" element={<Login />} />
              
              {/* Registration Routes */}
              <Route path="/register/patient" element={<PatientRegister />} />
              <Route path="/register/doctor" element={<DoctorRegister />} />
              <Route path="/register" element={<Navigate to="/register/patient" replace />} />
              
              {/* User Panel Routes */}
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Profile />} />
                <Route path="profile" element={<Profile />} />
                <Route path="enquiries" element={<MyEnquiries />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="bookings" element={<Bookings />} />
              </Route>
              
              {/* Admin Panel Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/hospitals" element={<ManageHospitals />} />
              <Route path="/admin/doctors" element={<ManageDoctors />} />
              <Route path="/admin/treatments" element={<ManageTreatments />} />
              <Route path="/admin/packages" element={<ManagePackages />} />
              <Route path="/admin/blogs" element={<ManageBlogs />} />
              <Route path="/admin/enquiries" element={<ManageEnquiries />} />
              <Route path="/admin/testimonials" element={<ManageTestimonials />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;