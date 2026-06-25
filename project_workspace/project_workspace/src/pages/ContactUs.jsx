import React from 'react';
import { Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import FollowUsSection from '../components/FollowUsSection';

export default function ContactUs() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending data to admin
    setSubmitted(true);
    e.target.reset();
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <PageWrapper>
      {/* Success Notification Toast */}
      {submitted && (
        <div className="success-toast glass-card">
          <CheckCircle color="#22c55e" size={24} />
          <div>
            <h4>Request Successful</h4>
            <p>Our team will contact you shortly.</p>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="contact section" style={{ borderTop: '1px solid rgba(188, 150, 230, 0.1)' }}>
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="badge">Contact Us</span>
            <h1 className="gradient-text">Get in Touch</h1>
            <p style={{ marginBottom: '2.5rem' }}>Have questions about our freight services? Our team is ready to help you optimize your logistics and provide support.</p>
            
            <div className="contact-item">
              <div className="contact-icon"><Phone size={24} /></div>
              <div>
                <h4>Call Us</h4>
                <p><a href="https://wa.me/919815896838" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9815896838</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Mail size={24} /></div>
              <div>
                <h4>Email Us</h4>
                <p><a href="mailto:himalayanpackersandmovers@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>himalayanpackersandmovers@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Clock size={24} /></div>
              <div>
                <h4>Working Hours</h4>
                <p>Monday to Sunday</p>
                <p>8:30 AM to 9:30 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-card">
            <h3>Request a Truck</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your full name" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Origin City</label>
                  <input type="text" name="origin_city" placeholder="e.g. Delhi" required />
                </div>
                <div className="form-group">
                  <label>Destination</label>
                  <input type="text" name="destination" placeholder="e.g. Mumbai" required />
                </div>
              </div>
              <div className="form-group">
                <label>Shipment Type</label>
                <select name="shipment_type" required defaultValue="">
                  <option value="" disabled>Select shipment type</option>
                  <option value="Load Type Based Categories">Load Type Based Categories</option>
                  <option value="Shifting / Relocation Services">Shifting / Relocation Services</option>
                  <option value="Goods Type Based Categories">Goods Type Based Categories</option>
                  <option value="Business / Industry Based">Business / Industry Based</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="4" placeholder="Your requirements or load details..." required></textarea>
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="tel" name="phone" placeholder="Your mobile number" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Request a Truck <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <FollowUsSection />
    </PageWrapper>
  );
}
