import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

export default function AboutUs() {
  return (
    <PageWrapper>
      <section className="section container">
        <div className="features-header">
          <span className="badge">Our Story</span>
          <h1>About Himalyan Tempo Transport</h1>
          <p>We are reimagining transportation by bridging the gap between fleet owners and businesses.</p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: 'var(--color-text)' }}>
            Himalyan Tempo Transport (HTT) is dedicated to providing completely transparent, incredibly efficient, and highly secure freight services across India. Founded on the principles of trust and reliability, we ensure that every mile covered adds value to your business.
          </p>
        </div>
      </section>

      {/* Testimonials - From Our Fleet to Yours */}
      <section className="testimonials section glass" style={{ borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}>
        <div className="container">
          <div className="test-intro">
            <h2 className="gradient-text">From Our Fleet to Yours</h2>
            <p>See why industry leaders trust Himalyan Tempo Transport to manage their heavy logistics needs.</p>
            <a href="#" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>View all stories <ArrowRight size={18} /></a>
          </div>
          <div className="test-cards">
            <div className="glass-card test-card">
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                <Star size={20} fill="currentColor" display="inline" />
                <Star size={20} fill="currentColor" display="inline" />
                <Star size={20} fill="currentColor" display="inline" />
                <Star size={20} fill="currentColor" display="inline" />
                <Star size={20} fill="currentColor" display="inline" />
              </div>
              <p>"Being in the business of Transportation, we have always seen heavy resistance to change. HTT has helped us bring down resistance. Their technology & strong operational controls have helped us improve services with true value addition."</p>
              <div className="test-author">
                <h4>Mr. Randhir Singh</h4>
                <span>CEO</span>
              </div>
            </div>
            <div className="glass-card test-card">
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                <Star size={20} fill="currentColor" display="inline" />
                <Star size={20} fill="currentColor" display="inline" />
                <Star size={20} fill="currentColor" display="inline" />
                <Star size={20} fill="currentColor" display="inline" />
                <Star size={20} fill="currentColor" display="inline" />
              </div>
              <p>"In HTT, we have found a partner that consistently surpasses our expectations. Their fleet of trucks available in the portal is maintained to the highest standards, ensuring that our shipments are transported safe & secure."</p>
              <div className="test-author">
                <span>Managing Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
