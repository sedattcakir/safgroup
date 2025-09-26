import React, { Suspense, lazy, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SEO from './components/common/SEO';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import Stats from './components/sections/Stats';
import ErrorBoundary from './components/common/ErrorBoundary';
import './styles/globals.css';

// Lazy loading - sayfalar ihtiyaç halinde yüklenecek
const AboutPage = lazy(() => 
  import(/* webpackChunkName: "about" */ './components/pages/AboutPage')
);
const PolicyPage = lazy(() => 
  import(/* webpackChunkName: "policy" */ './components/pages/PolicyPage')
);
const ManagementPage = lazy(() => 
  import(/* webpackChunkName: "management" */ './components/pages/ManagementPage')
);
const QualityPage = lazy(() => 
  import(/* webpackChunkName: "quality" */ './components/pages/QualityPage')
);
const EnvironmentPage = lazy(() => 
  import(/* webpackChunkName: "environment" */ './components/pages/EnvironmentPage')
);
const SafetyPage = lazy(() => 
  import(/* webpackChunkName: "safety" */ './components/pages/SafetyPage')
);
const ContactPage = lazy(() => 
  import(/* webpackChunkName: "contact" */ './components/pages/ContactPage')
);

// Service sayfalarını ayrı chunk'ta gruplayalım
const SandQuarryPage = lazy(() => 
  import(/* webpackChunkName: "services" */ './components/pages/services/SandQuarryPage')
);
const ConcretePage = lazy(() => 
  import(/* webpackChunkName: "services" */ './components/pages/services/ConcretePage')
);
const EnergyPage = lazy(() => 
  import(/* webpackChunkName: "services" */ './components/pages/services/EnergyPage')
);
const SlaughterhousePage = lazy(() => 
  import(/* webpackChunkName: "services" */ './components/pages/services/SlaughterhousePage')
);

// Gelişmiş Loading Component
const LoadingSpinner = memo(() => (
  <div className="loading-container">
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Sayfa yükleniyor...</p>
    </div>
  </div>
));
LoadingSpinner.displayName = 'LoadingSpinner';

// Ana içerik component'i
const AppContent = memo(() => {
  const location = useLocation();
  const isServicePage = ['/kum-ocagi', '/beton', '/enerji', '/mezbane'].includes(location.pathname);

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Ana Sayfa */}
            <Route 
              path="/" 
              element={
                <div>
                  <SEO 
                    title="Ana Sayfa"
                    description="SAF GROUP - Kum ocağı işletmeciliği, hazır beton üretimi, enerji çözümleri ve mezbane hizmetlerinde 30 yıllık deneyim."
                    keywords="SAF GROUP, kum ocağı, hazır beton, enerji, mezbane, inşaat malzemeleri, Diyarbakır"
                    canonical="/"
                  />
                  <Hero />
                  <Products />
                  <Stats />
                </div>
              } 
            />
            
            {/* Kurumsal Sayfalar */}
            <Route path="/hakkimizda" element={
              <>
                <SEO 
                  title="Hakkımızda"
                  description="SAF GROUP'un 30 yıllık deneyimi, misyon, vizyon ve değerleri. 1994'ten beri inşaat sektöründe güvenilir hizmet."
                  keywords="SAF GROUP hakkında, şirket tarihçesi, misyon, vizyon, değerler, deneyim"
                  canonical="/hakkimizda"
                />
                <AboutPage />
              </>
            } />
            
            <Route path="/politika" element={
              <>
                <SEO 
                  title="Politika"
                  description="SAF GROUP kurumsal politikaları, kalite politikası, çevre politikası ve iş sağlığı güvenliği politikası."
                  keywords="SAF GROUP politika, kalite politikası, çevre politikası, iş güvenliği politikası"
                  canonical="/politika"
                />
                <PolicyPage />
              </>
            } />
            
            <Route path="/yonetim" element={
              <>
                <SEO 
                  title="Yönetim Sistemleri"
                  description="ISO 9001 kalite yönetim sistemi, ISO 14001 çevre yönetim sistemi ve ISO 45001 iş sağlığı güvenliği sistemleri."
                  keywords="ISO 9001, ISO 14001, ISO 45001, kalite yönetim sistemi, çevre yönetim sistemi"
                  canonical="/yonetim"
                />
                <ManagementPage />
              </>
            } />
            
            {/* Sürdürülebilirlik Sayfalar */}
            <Route path="/kalite" element={
              <>
                <SEO 
                  title="Kalite Yaklaşımı"
                  description="SAF GROUP kalite yaklaşımı, sürekli iyileştirme kültürü ve müşteri memnuniyeti odaklı hizmet anlayışı."
                  keywords="kalite yaklaşımı, sürekli iyileştirme, müşteri memnuniyeti, kalite kontrol"
                  canonical="/kalite"
                />
                <QualityPage />
              </>
            } />
            
            <Route path="/cevre" element={
              <>
                <SEO 
                  title="Çevreye Saygı"
                  description="Sürdürülebilir üretim ve çevre koruma sorumluluğu ile gelecek nesillere yaşanabilir dünya."
                  keywords="çevre, sürdürülebilirlik, çevre koruma, yeşil teknoloji"
                  canonical="/cevre"
                />
                <EnvironmentPage />
              </>
            } />
            
            <Route path="/isg" element={
              <>
                <SEO 
                  title="İş Sağlığı ve Güvenliği"
                  description="Çalışan güvenliği önceliğimiz. Sıfır kaza hedefi ile güvenli çalışma ortamları oluşturma."
                  keywords="iş güvenliği, iş sağlığı, çalışan güvenliği, sıfır kaza, güvenlik eğitimi"
                  canonical="/isg"
                />
                <SafetyPage />
              </>
            } />
            
            {/* İletişim */}
            <Route path="/iletisim" element={
              <>
                <SEO 
                  title="İletişim"
                  description="SAF GROUP ile iletişime geçin. Adres, telefon ve e-posta bilgileri. Diyarbakır merkezli hizmet."
                  keywords="SAF GROUP iletişim, telefon, adres, Adıyaman, müşteri hizmetleri"
                  canonical="/iletisim"
                />
                <ContactPage />
              </>
            } />
            
            {/* Hizmet Sayfaları */}
            <Route path="/kum-ocagi" element={
              <>
                <SEO 
                  title="Kum Ocağı İşletmeciliği"
                  description="TSE standartlarında yüksek kaliteli doğal kum üretimi. Çevre dostu üretim yöntemleri ile sürdürülebilir hizmet."
                  keywords="kum ocağı, doğal kum, TSE standartları, kum üretimi, inşaat malzemeleri, Diyarbakır"
                  canonical="/kum-ocagi"
                />
                <SandQuarryPage />
              </>
            } />
            
            <Route path="/beton" element={
              <>
                <SEO 
                  title="Hazır Beton Üretimi"
                  description="TS EN 206 standardında hazır beton üretimi. C16/20 - C50/60 dayanım sınıfları, özel karışım tasarımı."
                  keywords="hazır beton, beton üretimi, TS EN 206, beton santrali, pompa beton, Diyarbakır"
                  canonical="/beton"
                />
                <ConcretePage />
              </>
            } />
            
            <Route path="/enerji" element={
              <>
                <SEO 
                  title="Enerji Çözümleri"
                  description="Yenilenebilir enerji teknolojileri, güneş enerjisi sistemleri ve enerji verimliliği projeleri."
                  keywords="güneş enerjisi, yenilenebilir enerji, enerji verimliliği, temiz teknoloji, sürdürülebilir enerji"
                  canonical="/enerji"
                />
                <EnergyPage />
              </>
            } />
            
            <Route path="/mezbane" element={
              <>
                <SEO 
                  title="Mezbane Hizmetleri"
                  description="HACCP sertifikalı modern mezbane tesisleri. Hijyen standartlarında güvenilir et işleme hizmetleri."
                  keywords="mezbane, et işleme, HACCP, hijyen standartları, veteriner kontrol, gıda güvenliği"
                  canonical="/mezbane"
                />
                <SlaughterhousePage />
              </>
            } />

             <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/environment" element={<EnvironmentPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            
          </Routes>
        </Suspense>
      </ErrorBoundary>
      
      {!isServicePage && <Footer />}
    </div>
  );
});
AppContent.displayName = 'AppContent';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;