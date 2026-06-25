import React, { useEffect, useState } from 'react';

export default function PageWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Scroll to top on page load smoothly
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div 
      className="page-wrapper"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
        width: '100%',
        minHeight: '100vh',
        paddingTop: '80px', // For fixed navbar
      }}
    >
      {children}
    </div>
  );
}
