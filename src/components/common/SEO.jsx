import { useEffect } from 'react';

const SEO = ({ 
  title = 'SAF GROUP', 
  description = 'SAF GROUP - Profesyonel hizmetler',
  keywords = 'SAF GROUP',
  canonical = '',
  ogImage = '/og-image.jpg'
}) => {
  useEffect(() => {
    // Title
    document.title = title ? `${title} | SAF GROUP` : 'SAF GROUP';
    
    // Meta tags
    const updateMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateProperty = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow');
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph
    updateProperty('og:title', title);
    updateProperty('og:description', description);
    updateProperty('og:type', 'website');
    updateProperty('og:image', ogImage);
    updateProperty('og:url', window.location.href);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `${window.location.origin}${canonical}`);
    }

    // Schema.org structured data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SAF GROUP",
      "description": description,
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Diyarbakır",
        "addressCountry": "TR"
      }
    };

    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords, canonical, ogImage]);

  return null; // Bu component görsel bir şey render etmez
};

export default SEO;