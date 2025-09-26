// src/components/sections/Stats.jsx - Düzeltilmiş versiyon
import React, { useEffect, useRef, useState } from 'react';

// Final values'i component dışında tanımla
const FINAL_VALUES = {
  projects: 450,
  experience: 30,
  customers: 990,
  employees: 50
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    projects: 0,
    experience: 0,
    customers: 0,
    employees: 0
  });
  
  const sectionRef = useRef(null);

  const stats = [
    { key: 'projects', number: animatedValues.projects, suffix: '+', label: 'Tamamlanan Proje' },
    { key: 'experience', number: animatedValues.experience, suffix: '', label: 'Yıllık Deneyim' },
    { key: 'customers', number: animatedValues.customers, suffix: '+', label: 'Mutlu Müşteri' },
    { key: 'employees', number: animatedValues.employees, suffix: '+', label: 'Uzman Ekip' }
  ];

  // Intersection Observer - sadece bir kez çalışsın
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = sectionRef.current; // ✅ Current değerini sakla
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // ✅ Saklanan değeri kullan
      }
    };
  }); 

  // Sayıları animasyonlu olarak artırma
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 saniye
      const steps = 60; // 60 adım
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedValues({
          projects: Math.floor(FINAL_VALUES.projects * progress),
          experience: Math.floor(FINAL_VALUES.experience * progress),
          customers: Math.floor(FINAL_VALUES.customers * progress),
          employees: Math.floor(FINAL_VALUES.employees * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedValues(FINAL_VALUES); // Son değerleri garantile
        }
      }, stepDuration);

      return () => clearInterval(timer); // ✅ Cleanup timer
    }
  }, [isVisible]); // ✅ isVisible dependency olarak doğru

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Rakamlarla SAF GROUP</h2>
          <p className="section-subtitle">
            30 yıllık deneyimimizle elde ettiğimiz başarılarımız
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={stat.key} 
              className={`stat-card ${isVisible ? 'animate' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s` // Stagger efekti
              }}
            >
              <div className="stat-number">
                {stat.number}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;