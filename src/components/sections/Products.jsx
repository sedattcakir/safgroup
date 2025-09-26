import React from 'react';
import { useNavigate } from 'react-router-dom';
import kumOcagiImg from '../../assets/images/products/kum-ocagi.jpg';
import betonImg from '../../assets/images/products/beton.jpg';
import enerjiImg from '../../assets/images/products/enerji.jpg';
import mezbaneImg from '../../assets/images/products/mezbane.jpg';



const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'kum-ocagi',
      icon: 'K',
      title: 'Kum Ocağı İşletmeciliği',
      description: 'Yüksek kaliteli doğal kum üretimi ile inşaat sektöründe güvenilir çözümler sunuyoruz. Çevre dostu üretim yöntemleri ile sürdürülebilir hizmet veriyoruz.',
      route: '/kum-ocagi',
      backgroundImage: kumOcagiImg,
      link: '/kum-ocagi'
    },
    {
      id: 'beton',
      icon: 'B',
      title: 'Beton Üretimi',
      description: 'İhtiyaçlarınıza özel hazır beton üretimi ile projelerinizi güçlendiriyoruz. Kalite standartlarımız ile dayanıklı ve güvenilir çözümler sağlıyoruz.',
      route: '/beton',
      backgroundImage: betonImg,
      link: '/beton'
    },
    {
      id: 'enerji',
      icon: 'E',
      title: 'Enerji',
      description: 'Yenilenebilir enerji çözümleri ve enerji verimliliği projeleriyle sürdürülebilir gelecek için çevre dostu teknolojiler sunuyoruz.',
      route: '/enerji',
      backgroundImage: enerjiImg,
      link: '/enerji'
    },
    {
      id: 'mezbane',
      icon: 'M',
      title: 'Mezbane',
      description: 'Modern et işleme tesisleri ile hijyenik ve kaliteli üretim standartlarında güvenilir gıda tedarik hizmetleri sağlıyoruz.',
      route: '/mezbane',
      backgroundImage: mezbaneImg,
      link: '/mezbane'
    }
  ];

  const handleProductClick = (route) => {
    navigate(route);
  };

  return (
    <section className="products-section" id="products">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Ürün & Hizmetlerimiz</h2>
          <p className="section-subtitle">
            30 yıllık deneyimimizle inşaat sektöründe güvenilir çözümler sunuyoruz
          </p>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              style={{
               backgroundImage: `url(${product.backgroundImage})`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <button 
                className="product-btn" 
                onClick={() => handleProductClick(product.route)}
              >
                Detaylı Bilgi
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;