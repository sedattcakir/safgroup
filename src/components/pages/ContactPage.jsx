import React from 'react';

const ContactPage = () => {
  return (
    <div id="iletisim" className="page active">
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">İletişim</h1>
          <p className="page-subtitle">Bizimle iletişime geçin</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Adresimiz</h3>
            <p>
              SAF GROUP<br/>
              Adıyaman Merkez<br/>
              02200 Adıyaman/Türkiye
            </p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Telefon</h3>
            <p>
              +90 (416) XXX XX XX<br/>
              +90 (416) XXX XX XX
            </p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>E-posta</h3>
            <p>
              info@safgroup.com.tr<br/>
              satis@safgroup.com.tr
            </p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">🕒</div>
            <h3>Çalışma Saatleri</h3>
            <p>
              Pazartesi - Cuma: 08:00 - 18:00<br/>
              Cumartesi: 08:00 - 14:00<br/>
              Pazar: Kapalı
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;