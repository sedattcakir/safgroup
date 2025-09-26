import React from 'react';


const EnvironmentPage = () => {
  return (
    <div id="cevre" className="page active">
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">Çevreye Saygı</h1>
          <p className="page-subtitle">Sürdürülebilir üretim ve çevre koruma sorumluluğumuz</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="content-section">
          <h2>Çevre Politikamız</h2>
          <p>
            Gelecek nesillere yaşanabilir bir dünya bırakmak temel sorumluluğumuzdur. Bu bilinçle, 
            tüm faaliyetlerimizde çevre dostu yaklaşımları benimser ve sürdürülebilir üretim yöntemlerini uygularız.
          </p>
          
          <h3>Çevresel Hedeflerimiz</h3>
          <ul>
            <li>Karbon ayak izimizi azaltmak</li>
            <li>Su kaynaklarını verimli kullanmak</li>
            <li>Atık üretimini minimize etmek</li>
            <li>Geri dönüşüm oranını artırmak</li>
            <li>Yenilenebilir enerji kullanımını yaygınlaştırmak</li>
          </ul>
          
          <h3>Uyguladığımız Çevre Projeleri</h3>
          <ul>
            <li>Güneş enerjisi sistemleri</li>
            <li>Su geri kazanım tesisleri</li>
            <li>Atık ayrıştırma ve geri dönüşüm</li>
            <li>Enerji verimli ekipman kullanımı</li>
            <li>Çevre dostu üretim teknolojileri</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentPage;