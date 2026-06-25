import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const PRODUCTS = [
  // NECKLACES
  {
    id: 1,
    title: "Iced Initial Pendant",
    price: 2499.00,
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Iced Teddy Pendant",
    price: 2583.00,
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10ee?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Cubic Zirconia Tennis Choker",
    price: 3199.00,
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?w=800&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Baroque Pearl Chain",
    price: 1850.00,
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1599643477874-c50f443b000b?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    featured: false
  },
  // BRACELETS
  {
    id: 5,
    title: "Alina Hand Chain",
    price: 1949.00,
    category: "bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?w=800&q=80",
    featured: true
  },
  {
    id: 6,
    title: "Heart Tennis Bracelet",
    price: 2148.00,
    category: "bracelets",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1602751584552-8ba73aad10ee?w=800&q=80",
    featured: true
  },
  {
    id: 7,
    title: "Aura Crystal Cuff",
    price: 2299.00,
    category: "bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?w=800&q=80",
    featured: false
  },
  // RINGS
  {
    id: 8,
    title: "Eternity Band Ring",
    price: 1499.00,
    category: "rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    featured: false
  },
  {
    id: 9,
    title: "Empress Crown Ring",
    price: 1799.00,
    category: "rings",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    featured: true
  },
  // EARRINGS
  {
    id: 10,
    title: "Midnight Star Hoops",
    price: 1299.00,
    category: "earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    featured: false
  },
  {
    id: 11,
    title: "Golden Cascade Drop",
    price: 1599.00,
    category: "earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80",
    featured: true
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  useEffect(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (selectedCategory !== "all") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort Products
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Default / Featured: Sort featured first
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="shop-page fade-in">
      {/* Banner */}
      <div className="shop-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>ZIVARA COLLECTION</h1>
          <p>Tarnish-Free, Water-Resistant Everyday Luxury Jewelry</p>
        </div>
      </div>

      <div className="container section-padding">
        {/* Filter Controls */}
        <div className="shop-controls">
          {/* Categories */}
          <div className="categories-filter">
            {["all", "necklaces", "earrings", "bracelets", "rings"].map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search and Sort */}
          <div className="search-sort-wrapper">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="sort-box">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Count */}
        <div className="product-count-bar">
          <p>Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}</p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                hoverImage={product.hoverImage}
              />
            ))}
          </div>
        ) : (
          <div className="no-products-found">
            <h3>No products found</h3>
            <p>Try adjusting your filters or search query to find what you're looking for.</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setSortBy("featured");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
