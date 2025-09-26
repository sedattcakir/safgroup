import React from 'react';


const ManagementPage = () => {
  return (
    <div id="yonetim" className="page active">
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">Yönetim Sistemleri</h1>
          <p className="page-subtitle">Kalite, çevre ve iş güvenliği yönetim sistemlerimiz</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="content-section">
          <h2>Yönetim Sistemlerimiz</h2>
          <p>
            SAF GROUP olarak, uluslararası standartlara uygun yönetim sistemleri ile 
            operasyonlarımızı yürütüyoruz. Bu sistemler sayesinde sürdürülebilir ve 
            kaliteli hizmet sunuyoruz.
          </p>
          
          <h3>ISO 9001 Kalite Yönetim Sistemi</h3>
          <ul>
            <li>Müşteri memnuniyeti odaklı yaklaşım</li>
            <li>Sürekli iyileştirme kültürü</li>
            <li>Dokümantasyon ve süreç yönetimi</li>
            <li>Performans ölçümü ve analizi</li>
          </ul>
          
          <h3>ISO 14001 Çevre Yönetim Sistemi</h3>
          <ul>
            <li>Çevresel etkilerin minimize edilmesi</li>
            <li>Atık yönetimi ve geri dönüşüm</li>
            <li>Enerji verimliliği projeleri</li>
            <li>Yasal mevzuata uygunluk</li>
          </ul>
          
          <h3>ISO 45001 İş Sağlığı ve Güvenliği</h3>
          <ul>
            <li>Risk değerlendirmesi ve yönetimi</li>
            <li>Çalışan eğitimi ve bilinçlendirme</li>
            <li>Acil durum planları</li>
            <li>Sıfır kaza hedefi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;