import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ image, title, price, hoverImage }) => {
  return (
    <div className="product-card">
      <Link to="/shop" className="product-image-wrapper">
        <img src={image} alt={title} className="product-image main-image" />
        {hoverImage && (
          <img src={hoverImage} alt={title} className="product-image hover-image" />
        )}
        <div className="add-to-cart-overlay">
          <button className="quick-add-btn">QUICK ADD</button>
        </div>
      </Link>
      <div className="product-info">
        <Link to="/shop">
          <h3 className="product-title">{title}</h3>
        </Link>
        <p className="product-price">Rs. {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
