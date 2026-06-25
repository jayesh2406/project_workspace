import React from 'react';
import { X, Mail, Lock } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay">
      <div className="glass-card login-modal-content fade-in">
        <button className="close-btn" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        
        <div className="login-header">
          <h2 className="gradient-text">Welcome Back</h2>
          <p>Login to Himalyan Tempo Transport</p>
        </div>

        <form className="login-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="form-group">
            <label>Email or Phone</label>
            <div className="input-with-icon">
              <Mail className="input-icon" size={18} />
              <input type="text" placeholder="Enter email or phone" required />
            </div>
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <div className="input-with-icon">
              <Lock className="input-icon" size={18} />
              <input type="password" placeholder="Enter password" required />
            </div>
          </div>
          
          <div className="form-row" style={{ justifyContent: 'space-between', alignItems: 'center', margin: '0.5rem 0 1.5rem', gap: 0 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', margin: 0 }}>
              <input type="checkbox" style={{ width: 'auto', margin: 0, padding: 0 }} /> 
              <span style={{ fontSize: '0.85rem' }}>Remember me</span>
            </label>
            <a href="#" style={{ color: 'var(--color-accent)', fontSize: '0.85rem', textDecoration: 'none' }}>Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Login
          </button>
          
          <p className="login-footer">
            Don't have an account? <a href="#" style={{ color: 'var(--color-accent)' }}>Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
