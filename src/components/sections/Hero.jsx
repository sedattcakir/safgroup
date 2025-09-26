import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import hero1 from '../../assets/images/hero-1.jpg';
import hero2 from '../../assets/images/hero-2.jpg';
import hero3 from '../../assets/images/hero-3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  // Sayfadaki bir bölüme yumuşak kaydırma yapan fonksiyon
  /*const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };*/
  
  const slides = [
    {
      title: "SAF GROUP",
      subtitle: "Kalite, güvenilirlik ve sürdürülebilirlik odaklı çözümlerle geleceği inşa ediyoruz",
      buttonText: "Ürünlerimizi Keşfedin",
      buttonAction: () => {
        const element = document.getElementById('products');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, // Aynı sayfadaki ürünler bölümüne kaydır
      backgroundImage: hero1
    },
    {
      title: "KALİTE ODAKLI",
      subtitle: "30 yıllık deneyimimizle sektörde güvenilir çözümler sunuyoruz",
      buttonText: "Kalite Yaklaşımı",
      buttonAction: () => navigate('/quality'), // Kalite sayfasına git
      backgroundImage: hero2
    },
    {
      title: "ZİRVE ODAKLI", 
      subtitle: "Çevre dostu üretim yöntemleriyle gelecek nesillere yaşanabilir dünya",
      buttonText: "Çevreye Saygı",
      buttonAction: () => navigate('/environment'), // Çevre sayfasına git
      backgroundImage: hero3
    }
  ];

  // Otomatik slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

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
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''} hero-slide-${index + 1}`}
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.4)), url(${slide.backgroundImage})`
            }}
          >
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button className="hero-cta" onClick={slide.buttonAction}>
                {slide.buttonText}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-navigation">
        <div className="hero-nav prev" onClick={prevSlide}>&#10094;</div>
        <div className="hero-nav next" onClick={nextSlide}>&#10095;</div>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;