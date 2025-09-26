import React from 'react';

// XSS koruması için HTML sanitizer
const sanitizeHTML = (html) => {
  // Tehlikeli karakterleri temizle
  return html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Güvenli metin rendering component'i
export const SafeText = ({ children, allowHTML = false }) => {
  if (allowHTML) {
    // HTML'e izin veriliyorsa sanitize et
    const sanitized = sanitizeHTML(children);
    return <span dangerouslySetInnerHTML={{ __html: sanitized }} />;
  }
  
  // Varsayılan olarak sadece metin
  return <span>{children}</span>;
};

// Güvenli link component'i
export const SafeLink = ({ href, children, ...props }) => {
  // URL validation
  const isValidURL = (url) => {
    try {
      const urlObj = new URL(url);
      return ['http:', 'https:', 'mailto:', 'tel:'].includes(urlObj.protocol);
    } catch {
      return false;
    }
  };

  // Güvenli olmayan URL'leri engelle
  if (!isValidURL(href)) {
    console.warn('Güvenli olmayan URL engellendi:', href);
    return <span className="blocked-link">{children}</span>;
  }

  return (
    <a 
      href={href} 
      {...props}
      rel={href.startsWith('http') ? 'noopener noreferrer' : props.rel}
      target={href.startsWith('http') ? '_blank' : props.target}
    >
      {children}
    </a>
  );
};

// Form input sanitizer
export const SafeInput = ({ value, onChange, ...props }) => {
  const handleChange = (e) => {
    const sanitized = sanitizeHTML(e.target.value);
    onChange({ ...e, target: { ...e.target, value: sanitized } });
  };

  return (
    <input 
      {...props}
      value={value}
      onChange={handleChange}
    />
  );
};

// CSP (Content Security Policy) Meta Tags
export const SecurityHeaders = () => {
  React.useEffect(() => {
    // CSP header'ları meta tag olarak ekle
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self';
      frame-ancestors 'none';
    `.replace(/\s+/g, ' ').trim();
    
    document.head.appendChild(cspMeta);

    // X-Frame-Options
    const frameMeta = document.createElement('meta');
    frameMeta.httpEquiv = 'X-Frame-Options';
    frameMeta.content = 'DENY';
    document.head.appendChild(frameMeta);

    // X-Content-Type-Options
    const contentTypeMeta = document.createElement('meta');
    contentTypeMeta.httpEquiv = 'X-Content-Type-Options';
    contentTypeMeta.content = 'nosniff';
    document.head.appendChild(contentTypeMeta);

    return () => {
      document.head.removeChild(cspMeta);
      document.head.removeChild(frameMeta);
      document.head.removeChild(contentTypeMeta);
    };
  }, []);

  return null;
};