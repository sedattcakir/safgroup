import React from 'react';

const AboutPage = () => {
  return (
    <div id="hakkimizda" className="page active">
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">Hakkımızda</h1>
          <p className="page-subtitle">SAF GROUP'un kuruluş hikayesi ve değerlerimiz</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="content-section">
          <h2>Şirket Tarihçesi</h2>
          <p>
            SAF Group, 1994 yılında Adıyaman’da kurulmuş ve küçük bir işletme olarak başladığı yolculuğunu bugün 30 yılı aşkın deneyimiyle bölgenin bilinen ve güvenilen şirketlerinden biri olarak sürdürmektedir. 
            Kum ocağı, beton santrali, mezbaha ve enerji alanlarında faaliyet gösteren şirketimiz; kaliteli hizmet anlayışı, müşteri memnuniyeti odaklı yaklaşımı ve sürdürülebilir üretim felsefesiyle büyümeye devam etmektedir.
          </p>
          
          <h3>Misyonumuz</h3>
          <p>
            İnşaat ve ilgili sektörlerde kaliteli hammadde tedariki ve sürdürülebilir üretim anlayışımızla, 
            müşterilerimizin projelerinin başarıya ulaşmasına katkı sağlamak. 
            Çevre dostu teknolojiler kullanarak hem ülkemize hem de gelecek nesillere yaşanabilir bir dünya bırakmak.
          </p>
          
          <h3>Vizyonumuz</h3>
          <p>
            Türkiye’nin önde gelen inşaat malzemeleri ve hizmet tedarikçilerinden biri olmak; 
            uluslararası standartlarda üretim ve hizmet sunarak sektörde lider konuma yükselmek
          </p>
          
          <h3>Değerlerimiz</h3>
          <ul>
            <li>Kalite: Tüm süreçlerimizde en yüksek kalite standartlarını uygularız.</li>
            <li>Güvenilirlik: Müşterilerimizle uzun vadeli, sağlam ve şeffaf ilişkiler kurarız.</li>
            <li>Çevre dostu ve kaynakları verimli kullanan üretim yöntemleri benimseriz.</li>
            <li>İnovasyon: Teknolojik gelişmeleri takip eder, modern çözümler sunarız.</li>
            <li>İnsan Odaklılık: Çalışanlarımızın ve müşterilerimizin memnuniyetini öncelikli değer olarak görürüz.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;