import React from 'react';

// Import images
import img9ft from '../assets/9ft.png';
import img10ft from '../assets/10ft.jpeg';
import img11ft from '../assets/11ft.png';
import img14ft from '../assets/14ft.jpeg';
import img19ft from '../assets/19ft.png';
import img22ft from '../assets/22ft.png';
import img22_32ft from '../assets/22 - 32ft.jpeg';

export default function FleetShowcase() {
  return (
    <div className="fleet-showcase-wrapper">
      
      {/* GROUP 1 */}
      <div className="fleet-grid-group">
        <div className="fleet-row-top-3">
          {/* 9ft */}
          <div className="fleet-card card-purple">
            <div className="fleet-card-content">
              <h3>9ft Tempo</h3>
              <p className="fleet-desc">Optimized for quick commerce and local intra-city routes.</p>
              <div className="fleet-specs">
                <div className="spec">
                  <span className="spec-val">1.5 Tons</span>
                  <span className="spec-label text-muted">MAX PAYLOAD</span>
                </div>
              </div>
            </div>
            <div className="fleet-img-box">
              <img src={img9ft} alt="9ft Tempo" />
            </div>
          </div>

          {/* 10ft */}
          <div className="fleet-card card-purple">
            <div className="fleet-card-content">
              <h3>10ft Tempo</h3>
              <p className="fleet-desc">Optimized for FMCG distribution in Tier 1 cities.</p>
              <div className="fleet-specs">
                <div className="spec">
                  <span className="spec-val">2.2 Tons</span>
                  <span className="spec-label text-muted">MAX PAYLOAD</span>
                </div>
              </div>
            </div>
            <div className="fleet-img-box">
              <img src={img10ft} alt="10ft Tempo" />
            </div>
          </div>

          {/* 11ft */}
          <div className="fleet-card card-purple">
            <div className="fleet-card-content">
              <h3>11ft Truck</h3>
              <p className="fleet-desc">Inter-city specialist for industrial clusters.</p>
              <div className="fleet-specs">
                <div className="spec">
                  <span className="spec-val">3.0 Tons</span>
                  <span className="spec-label text-muted">MAX PAYLOAD</span>
                </div>
              </div>
            </div>
            <div className="fleet-img-box">
              <img src={img11ft} alt="11ft Truck" />
            </div>
          </div>
        </div>

        {/* 14ft (Yellow Bottom) */}
        <div className="fleet-card card-yellow horizontal-card">
          <div className="fleet-card-content">
            <span className="fleet-badge-dark">REGIONAL HEAVY HAUL</span>
            <h3 className="huge-title">14ft Prime</h3>
            <p>Our heavy-duty solution for inter-state FTL logistics. Perfect for larger commercial loads requiring stability and high cubic capacity across varied Indian terrains.</p>
            
            <div className="fleet-specs-horizontal">
              <div className="spec">
                <span className="spec-val">5.0 Tons</span>
                <span className="spec-label">PAYLOAD CAPACITY</span>
              </div>
              <div className="spec">
                <span className="spec-val">All-Weather</span>
                <span className="spec-label">CONTAINERIZED SAFETY</span>
              </div>
            </div>
          </div>
          <div className="fleet-img-box-horizontal">
            <img src={img14ft} alt="14ft Prime Truck" />
          </div>
        </div>
      </div>


      {/* GROUP 2 */}
      <div className="fleet-grid-group mt-5">
        <div className="fleet-row-top-2">
          {/* 19ft */}
          <div className="fleet-card card-purple">
            <div className="fleet-card-content">
              <h3>19ft Truck</h3>
              <p className="fleet-desc">Mid-weight hauler for varied inter-state supply chains.</p>
              <div className="fleet-specs">
                <div className="spec">
                  <span className="spec-val">7 - 9 Tons</span>
                  <span className="spec-label text-muted">MAX PAYLOAD</span>
                </div>
              </div>
            </div>
            <div className="fleet-img-box">
              <img src={img19ft} alt="19ft Truck" />
            </div>
          </div>

          {/* 22ft */}
          <div className="fleet-card card-purple">
            <div className="fleet-card-content">
              <h3>22ft Truck</h3>
              <p className="fleet-desc">Volume specialist for large FMCG, electronics and e-commerce loads.</p>
              <div className="fleet-specs">
                <div className="spec">
                  <span className="spec-val">10 - 15 Tons</span>
                  <span className="spec-label text-muted">MAX PAYLOAD</span>
                </div>
              </div>
            </div>
            <div className="fleet-img-box">
              <img src={img22ft} alt="22ft Truck" />
            </div>
          </div>
        </div>

        {/* 22-32ft (Yellow Bottom) */}
        <div className="fleet-card card-yellow horizontal-card">
          <div className="fleet-card-content">
            <span className="fleet-badge-dark">NATIONAL HEAVY HAUL</span>
            <h3 className="huge-title">22ft - 32ft Trailers</h3>
            <p>Mega capacity hauler for national connectivity. Engineered for massive industrial consignments and bulk logistics ensuring timely cross-country delivery.</p>
            
            <div className="fleet-specs-horizontal">
              <div className="spec">
                <span className="spec-val">15 - 25 Tons</span>
                <span className="spec-label">PAYLOAD CAPACITY</span>
              </div>
              <div className="spec">
                <span className="spec-val">Multi-Axle</span>
                <span className="spec-label">MAXIMUM STABILITY</span>
              </div>
            </div>
          </div>
          <div className="fleet-img-box-horizontal">
            <img src={img22_32ft} alt="32ft Trailer" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
