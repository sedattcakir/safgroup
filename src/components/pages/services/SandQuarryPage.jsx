import React, { useState, useEffect } from 'react';
import kumOcagi1 from '../../../assets/images/kum-ocagi-1.jpg';
import kumOcagi2 from '../../../assets/images/kum-ocagi-2.jpg';
import kumOcagi3 from '../../../assets/images/kum-ocagi-3.jpg';

const SandQuarryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Kum Ocağı İşletmeciliği",
      subtitle: "30 yıllık deneyimimizle yüksek kaliteli doğal kum üretimi",
      features: ["TSE Standartları", "Kalite Garantisi", "Hızlı Teslimat"],
      backgroundImage: kumOcagi1
    },
    {
      title: "Yüksek Kalite",
      subtitle: "Doğal kaynaklardan elde edilen premium kum",
      features: ["Laboratuvar Testli", "Çevre Dostu", "Uzman Ekip"],
      backgroundImage: kumOcagi2
    },
    {
      title: "Sürdürülebilir Üretim",
      subtitle: "Çevre dostu üretim yöntemleri",
      features: ["Doğa Dostu", "Sürdürülebilir", "ISO Sertifikalı"],
      backgroundImage: kumOcagi3
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
    <div id="kum-ocagi" className="page active">
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

export default SandQuarryPage;