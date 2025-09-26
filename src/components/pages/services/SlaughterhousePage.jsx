import React, { useState, useEffect } from 'react';
import mezbane1 from '../../../assets/images/mezbane-1.jpg';
import mezbane2 from '../../../assets/images/mezbane-2.jpg';
import mezbane3 from '../../../assets/images/mezbane-3.jpg';

const SlaughterhousePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Mezbaha İşletmeciliği",
      subtitle: "Modern et işleme tesisleri",
      features: ["HACCP Sertifikası", "Hijyen Standartları", "Kalite Güvencesi"],
      backgroundImage: mezbane1
    },
    {
      title: "Hijyen Standartları",
      subtitle: "En yüksek kalite ve güvenlik",
      features: ["Modern Tesisler", "Uzman Personel", "Soğuk Zincir"],
      backgroundImage: mezbane2
    },
    {
      title: "Güvenilir Hizmet",
      subtitle: "30 yıllık deneyim ve güven",
      features: ["Veteriner Kontrol", "İzlenebilirlik", "Sürekli Denetim"],
      backgroundImage: mezbane3
    }
  ];

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
    <div id="mezbane" className="page active">
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

export default SlaughterhousePage;