import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="announcement-bar">
        FREE SHIPPING ON ALL PREPAID ORDERS 🧸 | get 10% off when you buy 2 or more 🪩 Use code: staystacked
      </div>
      
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container container">
          
          {/* Mobile Menu Toggle */}
          <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          {/* Desktop Navigation */}
          <nav className={`navbar-nav desktop-nav`}>
            <ul className="nav-links">
              <li><Link to="/">HOME</Link></li>
              <li className="dropdown">
                <Link to="/shop">SHOP</Link>
                <div className="dropdown-menu">
                  <Link to="/shop">SHOP ALL</Link>
                  <Link to="/shop">NECKLACES</Link>
                  <Link to="/shop">EARRINGS</Link>
                  <Link to="/shop">BRACELETS</Link>
                  <Link to="/shop">RINGS</Link>
                </div>
              </li>
              <li><Link to="/collections">COLLECTIONS</Link></li>
            </ul>
          </nav>

          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/">
              <span className="logo-text">ZIVARA</span>
            </Link>
          </div>

          {/* Right Icons */}
          <div className="navbar-icons">
            <button className="icon-btn" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="icon-btn desktop-only" aria-label="Account">
              <User size={20} />
            </button>
            <button className="icon-btn cart-btn" aria-label="Cart">
              <ShoppingBag size={20} />
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/shop" onClick={() => setMobileMenuOpen(false)}>SHOP</Link></li>
            <li><Link to="/collections" onClick={() => setMobileMenuOpen(false)}>COLLECTIONS</Link></li>
            <li><Link to="/shop" onClick={() => setMobileMenuOpen(false)}>BESTSELLERS</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT US</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
