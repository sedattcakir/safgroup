import React from 'react';


const PolicyPage = () => {
  return (
    <div id="politika" className="page active">
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">Politika</h1>
          <p className="page-subtitle">SAF GROUP kurumsal politikaları ve ilkeleri</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="content-section">
          <h2>Kalite Politikası</h2>
          <p>
            SAF GROUP olarak, müşteri memnuniyetini sağlamak, yasal mevzuat ve standart 
            şartlarına uygun ürün ve hizmet sunmak, sürekli iyileştirme anlayışını benimser 
            ve kalite yönetim sistemimizi etkin bir şekilde uygularız.
          </p>
          
          <h3>Kalite İlkelerimiz</h3>
          <ul>
            <li>Müşteri memnuniyetini en üst düzeyde tutmak</li>
            <li>TS EN ISO 9001 standardlarına uygun üretim yapmak</li>
            <li>Sürekli gelişim ve iyileştirme kültürü oluşturmak</li>
            <li>Tüm süreçlerde dokümantasyon disiplini sağlamak</li>
          </ul>
          
          <h2>Çevre Politikası</h2>
          <p>
            Çevreye verdiğimiz zararı minimum düzeye indirmek, doğal kaynakları verimli 
            kullanmak ve gelecek nesillere temiz bir çevre bırakmak temel sorumluluğumuzdur.
          </p>
          
          <h3>Çevre İlkelerimiz</h3>
          <ul>
            <li>Çevre kirliliğini önleyici tedbirler almak</li>
            <li>Atık yönetimi konusunda sorumlu davranmak</li>
            <li>Enerji verimliliğini artırmak</li>
            <li>Doğal kaynakları korumak ve sürdürülebilir kullanım sağlamak</li>
          </ul>
          
          <h2>İş Sağlığı ve Güvenliği Politikası</h2>
          <p>
            İş sağlığı ve güvenliği konusunda "sıfır kaza" hedefiyle, tüm çalışanlarımızın 
            güvenli bir ortamda çalışmasını sağlamak önceliğimizdir.
          </p>
          
          <h3>İSG İlkelerimiz</h3>
          <ul>
            <li>Risk değerlendirmesi yaparak önleyici tedbirler almak</li>
            <li>Çalışanlarımızı düzenli olarak eğitmek</li>
            <li>Güvenlik ekipmanlarının eksiksiz kullanımını sağlamak</li>
            <li>Acil durum planları hazırlamak ve uygulamak</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;