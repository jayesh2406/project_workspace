import React from 'react';
import { Truck } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import FleetShowcase from '../components/FleetShowcase';
import RouteHighlight from '../components/RouteHighlight';

export default function Trucks() {
  return (
    <PageWrapper>
      <section className="section container">
        <div className="features-header">
          <span className="badge">Our Fleet</span>
          <h1 className="gradient-text">Available Trucks</h1>
          <p>We boast a wide variety of trucks to suit every transportation need you might have.</p>
        </div>
        
        <FleetShowcase />

        <RouteHighlight />

        <div className="features-grid" style={{ marginTop: '4rem' }}>
          <div className="glass-card">
            <div className="feature-icon">
              <Truck size={32} />
            </div>
            <h3>Open Body Trucks</h3>
            <p>Ideal for construction materials, heavy machinery, and weather-resistant goods.</p>
          </div>
          <div className="glass-card">
            <div className="feature-icon">
              <Truck size={32} />
            </div>
            <h3>Container Trucks</h3>
            <p>Closed and secure containers perfect for FMCG cargo and sensitive electronics.</p>
          </div>
          <div className="glass-card">
            <div className="feature-icon">
              <Truck size={32} />
            </div>
            <h3>Trailers</h3>
            <p>Heavy duty flatbed and lowbed trailers designed for project cargo and oversized loads.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
