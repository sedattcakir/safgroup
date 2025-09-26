import { useEffect, useState, useCallback } from 'react';

// Rate limiting hook
export const useRateLimit = (maxRequests = 10, timeWindow = 60000) => {
  const [requests, setRequests] = useState([]);

  const isAllowed = useCallback(() => {
    const now = Date.now();
    const recentRequests = requests.filter(time => now - time < timeWindow);
    
    if (recentRequests.length >= maxRequests) {
      console.warn('Rate limit aşıldı');
      return false;
    }
    
    setRequests(prev => [...recentRequests, now]);
    return true;
  }, [requests, maxRequests, timeWindow]);

  return isAllowed;
};

// Zararlı içerik tespit etme
export const useContentSecurity = () => {
  const detectMaliciousContent = useCallback((content) => {
    const suspiciousPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /eval\s*\(/gi,
      /document\.cookie/gi,
      /localStorage/gi,
      /sessionStorage/gi
    ];

    return suspiciousPatterns.some(pattern => pattern.test(content));
  }, []);

  const sanitizeContent = useCallback((content) => {
    if (detectMaliciousContent(content)) {
      console.warn('Zararlı içerik tespit edildi ve temizlendi');
      return content
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '');
    }
    return content;
  }, [detectMaliciousContent]);

  return { detectMaliciousContent, sanitizeContent };
};

// Güvenlik başlıkları kontrolü
export const useSecurityHeaders = () => {
  useEffect(() => {
    // HTTPS kontrolü - window.location kullan
    if (window.location.protocol !== 'https:' && process.env.NODE_ENV === 'production') {
      console.warn('HTTPS kullanılmıyor! Güvenlik riski var.');
    }

    // Referrer policy
    const referrerMeta = document.createElement('meta');
    referrerMeta.name = 'referrer';
    referrerMeta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerMeta);

    // Permissions policy
    const permissionsMeta = document.createElement('meta');
    permissionsMeta.httpEquiv = 'Permissions-Policy';
    permissionsMeta.content = 'camera=(), microphone=(), geolocation=()';
    document.head.appendChild(permissionsMeta);

    return () => {
      // Cleanup - meta tagları kaldır
      try {
        if (document.head.contains(referrerMeta)) {
          document.head.removeChild(referrerMeta);
        }
        if (document.head.contains(permissionsMeta)) {
          document.head.removeChild(permissionsMeta);
        }
      } catch (error) {
        // Meta tag kaldırma hatası - sessizce geç
        console.warn('Meta tag cleanup failed:', error);
      }
    };
  }, []);
};

// Form güvenliği
export const useFormSecurity = () => {
  const validateInput = useCallback((value, type = 'text') => {
    switch (type) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      
      case 'phone':
        // Escape karakterleri düzeltildi
        const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/;
        return phoneRegex.test(value);
      
      case 'name':
        const nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]{2,50}$/;
        return nameRegex.test(value);
      
      case 'url':
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      
      case 'number':
        const numberRegex = /^\d+$/;
        return numberRegex.test(value);
      
      default:
        return value.length > 0 && value.length < 1000;
    }
  }, []);

  const sanitizeInput = useCallback((value) => {
    if (typeof value !== 'string') {
      return '';
    }
    
    return value
      .replace(/[<>]/g, '') // HTML tag'leri kaldır
      .replace(/["']/g, '') // Quote'ları kaldır
      .replace(/javascript:/gi, '') // JavaScript protokolünü kaldır
      .replace(/on\w+=/gi, '') // Event handler'ları kaldır
      .trim();
  }, []);

  const validateForm = useCallback((formData) => {
    const errors = {};
    
    Object.keys(formData).forEach(field => {
      const value = formData[field];
      
      if (!value || value.trim().length === 0) {
        errors[field] = 'Bu alan zorunludur';
        return;
      }
      
      // Alan tipine göre validasyon
      switch (field) {
        case 'email':
          if (!validateInput(value, 'email')) {
            errors[field] = 'Geçerli bir email adresi giriniz';
          }
          break;
        case 'phone':
          if (!validateInput(value, 'phone')) {
            errors[field] = 'Geçerli bir telefon numarası giriniz';
          }
          break;
        case 'name':
        case 'firstName':
        case 'lastName':
          if (!validateInput(value, 'name')) {
            errors[field] = 'Geçerli bir isim giriniz (2-50 karakter)';
          }
          break;
        default:
          if (value.length > 1000) {
            errors[field] = 'Çok uzun metin (max 1000 karakter)';
          }
      }
    });
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }, [validateInput]);

  return { validateInput, sanitizeInput, validateForm };
};

// XSS koruması hook'u
export const useXSSProtection = () => {
  const escapeHTML = useCallback((text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }, []);

  const unescapeHTML = useCallback((html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }, []);

  return { escapeHTML, unescapeHTML };
};