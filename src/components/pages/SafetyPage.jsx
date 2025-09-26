import React from 'react';

const SafetyPage = () => {
  return (
    <div id="isg" className="page active">
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">İş Sağlığı ve Güvenliği</h1>
          <p className="page-subtitle">Çalışan güvenliği önceliğimizdir</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="content-section">
          <h2>İSG Yaklaşımımız</h2>
          <p>
            En değerli varlığımız olan çalışanlarımızın güvenliği, her türlü üretim hedefinden önce gelir. 
            "Sıfır kaza" hedefiyle, güvenli çalışma ortamları oluşturmaya odaklanıyoruz.
          </p>
          
          <h3>İSG İlkelerimiz</h3>
          <ul>
            <li>Önleyici güvenlik yaklaşımı</li>
            <li>Risk odaklı planlama</li>
            <li>Sürekli eğitim ve bilinçlendirme</li>
            <li>Çalışan katılımı ve geri bildirimi</li>
            <li>Teknoloji destekli güvenlik sistemleri</li>
          </ul>
          
          <h3>Güvenlik Uygulamalarımız</h3>
          <ul>
            <li>Düzenli risk analizi ve değerlendirme</li>
            <li>Kişisel koruyucu ekipman temini</li>
            <li>Güvenlik eğitimleri ve sertifikasyonlar</li>
            <li>Acil durum tatbikatları</li>
            <li>İş kazası ve ramak kala olayları analizi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;