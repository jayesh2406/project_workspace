import React from 'react';
import { Clock, PhoneCall, ArrowRightLeft } from 'lucide-react';
import routeMap from '../assets/north_india_route_map.png';

export default function RouteHighlight() {
  return (
    <div className="route-highlight-section section">
      <div className="container">
        <div className="route-highlight-grid">
          
          {/* Left Side: Map Visual */}
          <div className="route-visual-container">
            <div className="map-wrapper glass-card">
              <img src={routeMap} alt="Jammu to Chandigarh Route Map" className="route-map-image" />
              
              <div className="route-floating-card">
                <div className="route-loc-row">
                  <div className="route-loc">
                    <span className="route-label">ORIGIN</span>
                    <span className="route-name">Jammu (NH-44)</span>
                  </div>
                  <div className="route-icon-box">
                    <ArrowRightLeft size={24} color="var(--color-accent)" />
                  </div>
                  <div className="route-loc">
                    <span className="route-label" style={{ textAlign: 'right' }}>DESTINATION</span>
                    <span className="route-name" style={{ textAlign: 'right' }}>Chandigarh</span>
                  </div>
                </div>
                <div className="route-line-visual">
                  <div className="route-progress"></div>
                </div>
                <div className="route-footer-text">
                  NORTHERN CORRIDOR EXPRESS HIGHWAY
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="route-text-content">
            <h2 className="route-title">
              <span className="highlight-text">Northern</span> <br />
              Corridor
            </h2>
            <p className="route-desc">
              Our specialized <strong>Jammu to Chandigarh</strong> route serves as the lifeline for Northern India logistics. Traversing through NH-44, we ensure high-speed connectivity across J&K, Punjab, and Haryana with unmatched reliability.
            </p>

            <div className="route-stats">
              <div className="route-stat-box">
                <div className="stat-accent-line"></div>
                <div className="stat-text">
                  <h3>48 - 84 hrs</h3>
                  <p>EXPRESS TRANSIT TIME</p>
                </div>
              </div>

              <div className="route-stat-box">
                <div className="stat-accent-line purple-line"></div>
                <div className="stat-text">
                  <h3>24/7</h3>
                  <p>REAL-TIME TRACKING</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
