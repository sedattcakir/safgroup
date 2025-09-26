import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Güvenlik: Hassas bilgileri loglamayın
    const sanitizedError = {
      message: error.message || 'Bilinmeyen hata',
      stack: process.env.NODE_ENV === 'development' ? error.stack : 'Stack trace gizlendi',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    console.error('Error Boundary yakaladı:', sanitizedError);
    
    this.setState({ errorInfo });

    // Production'da error reporting servisine gönder
    if (process.env.NODE_ENV === 'production') {
      this.reportError(sanitizedError);
    }
  }

  reportError = (errorData) => {
    // Error reporting logic (opsiyonel)
    // API endpoint'iniz varsa buraya ekleyin
    try {
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData)
      }).catch(() => {
        // Hata raporlama başarısız olursa sessizce geç
        console.warn('Error reporting failed');
      });
    } catch (err) {
      // Fetch desteklenmiyorsa veya hata varsa
      console.warn('Error reporting not available');
    }
  };

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <h2>Bir şeyler ters gitti</h2>
            <p>Sayfa yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.</p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Geliştirici Detayları</summary>
                <pre>{this.state.error.message}</pre>
                {this.state.errorInfo && this.state.errorInfo.componentStack && (
                  <pre>{this.state.errorInfo.componentStack}</pre>
                )}
              </details>
            )}
            
            <div className="error-actions">
              <button 
                onClick={this.handleRefresh}
                className="error-refresh-btn"
              >
                Sayfayı Yenile
              </button>
              <button 
                onClick={this.handleGoBack}
                className="error-back-btn"
              >
                Geri Dön
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;