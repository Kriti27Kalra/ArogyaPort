import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import BookTest from './pages/BookTest';
import HealthPackages from './pages/HealthPackages';
import Laboratories from './pages/Laboratories';
import HomeCollection from './pages/HomeCollection';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-test" element={<BookTest />} />
        <Route path="/health-packages" element={<HealthPackages />} />
        <Route path="/laboratories" element={<Laboratories />} />
        <Route path="/home-collection" element={<HomeCollection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
