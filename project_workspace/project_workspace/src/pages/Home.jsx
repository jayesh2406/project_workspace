import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const bestSellers = [
    {
      id: 1,
      title: "Iced Initial Pendant",
      price: 2499.00,
      image: "https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
    },
    {
      id: 2,
      title: "Alina Hand Chain",
      price: 1949.00,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?w=800&q=80"
    },
    {
      id: 3,
      title: "Iced Teddy Pendant",
      price: 2583.00,
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10ee?w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    {
      id: 4,
      title: "Heart Tennis Bracelet",
      price: 2148.00,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1602751584552-8ba73aad10ee?w=800&q=80"
    }
  ];

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
            alt="ZIVARA Luxury Jewelry" 
            className="hero-image" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">UNLEASH YOUR<br/>INNER WILDCHILD</h1>
          <p className="hero-subtitle">Gold-plated everyday jewelry, inspired by dreams.</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">SHOP ALL</Link>
            <Link to="/collections" className="btn btn-outline hero-btn-outline">OUR COLLECTIONS</Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>✧ HIGH QUALITY MATERIALS ✧ TARNISH FREE ✧ WATER RESISTANT ✧ HYPOALLERGENIC ✧ PREMIUM PACKAGING ✧ EVERYDAY LUXURY </span>
          <span>✧ HIGH QUALITY MATERIALS ✧ TARNISH FREE ✧ WATER RESISTANT ✧ HYPOALLERGENIC ✧ PREMIUM PACKAGING ✧ EVERYDAY LUXURY </span>
        </div>
      </div>

      {/* Best Sellers */}
      <section className="section-padding container">
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <Link to="/shop" className="view-all-link">View all</Link>
        </div>
        
        <div className="product-grid">
          {bestSellers.map(product => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              hoverImage={product.hoverImage}
            />
          ))}
        </div>
      </section>

      {/* Categories / Collections */}
      <section className="collections-section">
        <div className="container">
          <h2 className="section-title text-center" style={{marginBottom: '3rem'}}>Our Collections</h2>
          <div className="collections-grid">
            <Link to="/collections" className="collection-card">
              <img src="https://images.unsplash.com/photo-1599643477874-c50f443b000b?w=800&q=80" alt="Necklaces" />
              <div className="collection-info">
                <h3>NECKLACES</h3>
                <span className="explore-text">Explore</span>
              </div>
            </Link>
            <Link to="/collections" className="collection-card">
              <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" alt="Rings" />
              <div className="collection-info">
                <h3>RINGS</h3>
                <span className="explore-text">Explore</span>
              </div>
            </Link>
            <Link to="/collections" className="collection-card">
              <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" alt="Earrings" />
              <div className="collection-info">
                <h3>EARRINGS</h3>
                <span className="explore-text">Explore</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
