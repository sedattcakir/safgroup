import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; // Dosya uzantısını kontrol edin

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); 
  };

  return (
    <header className="header" id="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="SAF GROUP" className="logo-image" />
        </Link>
        
        <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <li className="nav-item">
            <Link className="nav-link" to="/">Anasayfa</Link>
          </li>
          <li className="nav-item">
            <span className="nav-link">Kurumsal</span>
            <div className="dropdown">
              <Link className="dropdown-link" to="/hakkimizda">Hakkımızda</Link>
              <Link className="dropdown-link" to="/politika">Politika</Link>
              <Link className="dropdown-link" to="/yonetim">Yönetim Sistemleri</Link>
            </div>
          </li>
          <li className="nav-item">
            <span className="nav-link">Sürdürülebilirlik</span>
            <div className="dropdown">
              <Link className="dropdown-link" to="/kalite">Kalite Yaklaşımı</Link>
              <Link className="dropdown-link" to="/cevre">Çevreye Saygı</Link>
              <Link className="dropdown-link" to="/isg">ISG Yaklaşımı</Link>
            </div>
          </li>
          <li className="nav-item">
            <span className="nav-link">Hizmetlerimiz</span>
            <div className="dropdown">
              <Link className="dropdown-link" to="/kum-ocagi">Kum Ocağı</Link>
              <Link className="dropdown-link" to="/beton">Beton</Link>
              <Link className="dropdown-link" to="/enerji">Enerji</Link>
              <Link className="dropdown-link" to="/mezbane">Mezbaha</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/iletisim">İletişim</Link>
          </li>
        </ul>
        
        <button className="lang-btn">TR</button>
        
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;