import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ fontSize: '2rem' }}>
              HTT
            </Link>
            <p>Enabling Transport professionals to transact effortlessly and profitably. Made in India, connected globally.</p>
          </div>
          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><Link to="/services">HTT Truck App</Link></li>
              <li><Link to="/services">HTT FTL Solutions</Link></li>
              <li><Link to="/services">Pricing</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">In the News</a></li>
              <li><Link to="/contact">Contact Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom" style={{ textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} Himalyan Tempo Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
