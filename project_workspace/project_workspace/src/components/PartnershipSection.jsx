import React from 'react';
import { Handshake, Truck, ArrowUpRight } from 'lucide-react';

export default function PartnershipSection() {
  return (
    <section className="partnership-section section">
      <div className="container">
        <div className="partnership-container">
          {/* Map background effect is achieved via CSS background on .partnership-container */}
          <div className="partnership-left">
            <h2 className="partnership-title">
              India's Trusted <br />
              <span className="text-accent">Partnership Network</span>
            </h2>
            <h4 className="partnership-subtitle">
              Grow faster with India's reliable logistics backbone.
            </h4>
            <p className="partnership-desc">
              Join hands with a fast-growing logistics network. Whether you're a transporter, business, or brand — collaborate with us to scale operations, expand reach, and grow together with complete transparency and support.
            </p>
            
            <div className="partnership-features">
              <div className="p-feature-item">
                <div className="p-feature-icon">
                  <Handshake size={18} />
                </div>
                <span>Strategic Business & Brand Collaborations</span>
              </div>
              <div className="p-feature-item">
                <div className="p-feature-icon">
                  <Truck size={18} />
                </div>
                <span>Verified Transporter Network Across India</span>
              </div>
            </div>
          </div>

          <div className="partnership-right">
            <div className="partnership-form-box glass-card">
              <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>Ready to partner with us?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="tel:+919815896838" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1.25rem', padding: '1rem' }}>
                  Call Now
                </a>
                <a href="https://wa.me/919815896838" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '1.25rem', padding: '1rem', textDecoration: 'none' }}>
                  Drop a text <ArrowUpRight size={22} style={{ marginLeft: '4px' }} />
                </a>
              </div>
              <p className="partnership-form-note">Connect with our managing director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
