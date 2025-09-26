import React, { useState, useEffect } from 'react';
import beton1 from '../../../assets/images/beton-1.jpg';
import beton2 from '../../../assets/images/beton-2.jpg';
import beton3 from '../../../assets/images/beton-3.jpg';

const ConcretePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Beton Üretimi",
      subtitle: "İhtiyaçlarınıza özel hazır beton çözümleri",
      features: ["TS EN 206 Standardı", "Kalite Garantisi", "Zamanında Teslimat"],
      backgroundImage: beton1
    },
    {
      title: "Yüksek Dayanım",
      subtitle: "Dayanıklı ve güvenilir beton çözümleri",
      features: ["Yüksek Kalite", "Modern Tesisler", "Uzman Ekip"],
      backgroundImage: beton2
    },
    {
      title: "Teknik Destek",
      subtitle: "Projeleriniz için profesyonel danışmanlık",
      features: ["Teknik Destek", "Proje Danışmanlığı", "Kalite Kontrol"],
      backgroundImage: beton3
    }
  ];

  // Otomatik slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="beton" className="page active">
      <div className="product-hero">
        <div className="product-slider">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`product-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.5)), url(${slide.backgroundImage})`
              }}
            >
              <div className="product-hero-content">
                <h1 className="product-hero-title">{slide.title}</h1>
                <p className="product-hero-subtitle">{slide.subtitle}</p>
                <div className="product-hero-features">
                  {slide.features.map((feature, idx) => (
                    <div key={idx} className="hero-feature">{feature}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="slider-navigation">
          <div className="slider-nav prev" onClick={prevSlide}>&#10094;</div>
          <div className="slider-nav next" onClick={nextSlide}>&#10095;</div>
        </div>
        
        <div className="slider-dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConcretePage;