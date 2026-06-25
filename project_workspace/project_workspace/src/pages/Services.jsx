import React from 'react';
import { Package, ShieldCheck, MapPin } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

export default function Services() {
  return (
    <PageWrapper>
      <section className="section container">
        <div className="features-header">
          <span className="badge">Quality Offerings</span>
          <h1 className="gradient-text">Our Services</h1>
          <p>We provide comprehensive freight and transport services tailored to your business needs.</p>
        </div>
        
        <div className="features-grid">
          <div className="glass-card">
            <div className="feature-icon">
              <ShieldCheck size={32} />
            </div>
            <h3>Full Truckload (FTL)</h3>
            <p>Dedicated truck service for your bulk shipments across India with complete security and reliable timelines.</p>
          </div>
          <div className="glass-card">
            <div className="feature-icon">
              <Package size={32} />
            </div>
            <h3>Part Truckload (PTL)</h3>
            <p>Cost-effective transport solutions for smaller loads, sharing space without compromising on delivery speed.</p>
          </div>
          <div className="glass-card">
            <div className="feature-icon">
              <MapPin size={32} />
            </div>
            <h3>Express Delivery</h3>
            <p>Time-critical freight distribution handled by specialized drivers and express vehicles to ensure immediate delivery.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
