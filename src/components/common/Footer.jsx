import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="main-footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Kurumsal</h3>
            <ul className="footer-links">
              <li><Link to="/hakkimizda">Hakkımızda</Link></li>
              <li><Link to="/politika">Politika</Link></li>
              <li><Link to="/yonetim">Yönetim Sistemleri</Link></li>
              <li><Link to="/kalite">Kalite Yaklaşımı</Link></li>
              <li><Link to="/cevre">Çevreye Saygı</Link></li>
              <li><Link to="/isg">İSG Yaklaşımı</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Hizmetlerimiz</h3>
            <ul className="footer-links">
              <li><Link to="/kum-ocagi">Kum Ocağı Santrali</Link></li>
              <li><Link to="/beton">Beton Santrali</Link></li>
              <li><Link to="/mezbane">Mezbane</Link></li>
              <li><Link to="/enerji">Enerji</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">İletişim</h3>
            <div className="footer-contact">
              <p>Telefon: +90 (416) XXX XX XX</p>
              <p>E-posta: info@safgroup.com.tr</p>
              <p>Adres: Adıyaman Merkez, Türkiye</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Takip Edin</h3>
            <div className="footer-social">
                <a 
                    href="https://linkedin.com/company/saf-group" 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a 
                    href="https://facebook.com/safgroup" 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Facebook
                </a>
                <a 
                    href="https://instagram.com/safgroup" 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
                <a 
                    href="https://twitter.com/safgroup" 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </a>
            </div>
            </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 SAF Group. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;