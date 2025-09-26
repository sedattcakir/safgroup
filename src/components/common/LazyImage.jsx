// src/components/common/LazyImage.jsx
import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const currentElement = imgRef.current; // ✅ Current değerini sakla
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // ✅ Saklanan değeri kullan
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      {...props}
    >
      {hasError ? (
        <div className="image-error">
          <span>❌ Görsel yüklenemedi</span>
        </div>
      ) : (
        <>
          {/* Placeholder */}
          {!isLoaded && (
            <img
              src={placeholder}
              alt=""
              className="image-placeholder"
              style={{
                filter: 'blur(5px)',
                transition: 'opacity 0.3s ease'
              }}
            />
          )}
          
          {/* Actual Image */}
          {isInView && (
            <img
              src={src}
              alt={alt}
              className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
              onLoad={handleLoad}
              onError={handleError}
              style={{
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;