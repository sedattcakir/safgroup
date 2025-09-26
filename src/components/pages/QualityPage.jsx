import React from 'react';


const QualityPage = () => {
  return (
    <div id="kalite" className="page active">
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">Kalite Yaklaşımı</h1>
          <p className="page-subtitle">Sürekli iyileştirme ve mükemmellik arayışımız</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="content-section">
          <h2>Kalite Yaklaşımımız</h2>
          <p>
            30 yılı aşkın deneyimimiz boyunca kaliteyi sadece bir sonuç değil, bir süreç olarak görüyoruz. 
            Her aşamada mükemmelliği hedefleyerek, müşterilerimize en iyi hizmeti sunmaya odaklanıyoruz.
          </p>
          
          <h3>Kalite İlkelerimiz</h3>
          <ul>
            <li>Müşteri odaklılık ve memnuniyet</li>
            <li>Sürekli iyileştirme kültürü</li>
            <li>Çalışan katılımı ve gelişimi</li>
            <li>Veri odaklı karar alma</li>
            <li>Tedarikçi ilişkileri yönetimi</li>
          </ul>
          
          <h3>Kalite Kontrol Süreçlerimiz</h3>
          <ul>
            <li>Hammadde kalite kontrolü</li>
            <li>Üretim süreçlerinde anlık kontroller</li>
            <li>Nihai ürün testleri</li>
            <li>Laboratuvar analizleri</li>
            <li>Müşteri geri bildirim sistemi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QualityPage;