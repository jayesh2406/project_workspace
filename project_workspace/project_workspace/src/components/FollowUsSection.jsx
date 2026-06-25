import React from 'react';
import { PhoneCall, Search } from 'lucide-react';
import bgImage from '../assets/follow_us_bg.png';

export default function FollowUsSection() {
  return (
    <section className="follow-us-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="follow-overlay"></div>
      <div className="container follow-content">
        <span className="follow-badge">FREIGHT EXCELLENCE</span>
        <h2 className="follow-title">
          FOLLOW US <br />
          <span className="text-yellow">NOW</span>
        </h2>
        <p className="follow-desc">
          Pioneering the future of Himalayan logistics. We move mountains so your business can reach new peaks. Heavy cargo, precision timing, unshakeable trust.
        </p>
        
        <div className="follow-buttons-wrapper">
          <div className="follow-btn-group">
            <span className="connected-label">Connected</span>
            <a href="tel:+919216182894" className="btn btn-yellow-large">
              <PhoneCall size={20} /> Get a Quote
            </a>
          </div>
          <div className="follow-btn-group">
            <span className="connected-label">Connected</span>
            <button className="btn btn-outline-dark-large" onClick={() => alert('Tracking system coming soon!')}>
              Track Shipment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
