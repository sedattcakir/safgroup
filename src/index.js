// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Web Vitals performans monitoring
reportWebVitals((metric) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${metric.name}:`, metric.value, metric);
  }
  
  // Production'da analytics servisine gönderebilirsiniz
  if (process.env.NODE_ENV === 'production') {
    // Google Analytics, Adobe Analytics vs.
    // gtag('event', metric.name, {
    //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //   event_label: metric.id,
    //   non_interaction: true,
    // });
  }
});