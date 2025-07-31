// Analytics Service mit DSGVO-konformem Cookie-Management
class AnalyticsService {
  constructor() {
    this.gaId = 'G-XXXXXXXXXX'; // Google Analytics ID
    this.cookiesAccepted = false;
    this.init();
  }

  init() {
    this.checkCookieConsent();
    this.setupCookieBanner();
  }

  checkCookieConsent() {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
      this.cookiesAccepted = true;
      this.initGoogleAnalytics();
    }
  }

  setupCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');
    const privacyLink = document.querySelector('.btn-privacy');

    if (!localStorage.getItem('cookie-consent') && banner) {
      banner.style.display = 'block';
    }

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        this.acceptCookies();
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', () => {
        this.rejectCookies();
      });
    }

    if (privacyLink) {
      privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideCookieBanner();
        window.location.href = '/privacy';
      });
    }
  }

  acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    this.cookiesAccepted = true;
    this.hideCookieBanner();
    this.initGoogleAnalytics();
  }

  rejectCookies() {
    localStorage.setItem('cookie-consent', 'rejected');
    this.cookiesAccepted = false;
    this.hideCookieBanner();
  }

  hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.style.display = 'none';
    }
  }

  initGoogleAnalytics() {
    if (!this.cookiesAccepted || !this.gaId) return;

    // Google Analytics 4 Setup
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', this.gaId, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });

    window.gtag = gtag;
  }

  trackEvent(eventName, parameters = {}) {
    if (!this.cookiesAccepted || !window.gtag) return;
    
    window.gtag('event', eventName, {
      ...parameters,
      custom_parameter: 'kelepar_website'
    });
  }

  trackPageView(pageTitle, pagePath) {
    if (!this.cookiesAccepted || !window.gtag) return;
    
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath
    });
  }

  trackContactForm() {
    this.trackEvent('contact_form_submit', {
      event_category: 'engagement',
      event_label: 'contact_form'
    });
  }

  trackScroll(depth) {
    this.trackEvent('scroll', {
      event_category: 'engagement',
      event_label: `scroll_depth_${depth}%`
    });
  }
}

export default new AnalyticsService(); 