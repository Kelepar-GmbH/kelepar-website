// Performance Monitoring Service
class PerformanceService {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    this.observeWebVitals();
    this.observeResourceTiming();
    this.observeUserInteractions();
  }

  observeWebVitals() {
    // Core Web Vitals Monitoring
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.logMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          this.logMetric('FID', this.metrics.fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cls = clsValue;
        this.logMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        this.metrics.fcp = firstEntry.startTime;
        this.logMetric('FCP', firstEntry.startTime);
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    }
  }

  observeResourceTiming() {
    // Resource Loading Performance
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.initiatorType === 'img' || entry.initiatorType === 'script') {
            this.logResourceTiming(entry);
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    }
  }

  observeUserInteractions() {
    // Track user interactions for performance insights
    let scrollDepth = 0;
    let lastScrollTime = 0;

    window.addEventListener('scroll', () => {
      const currentTime = Date.now();
      if (currentTime - lastScrollTime > 100) { // Throttle to 100ms
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > scrollDepth) {
          scrollDepth = scrollPercent;
          this.trackScrollDepth(scrollDepth);
        }
        
        lastScrollTime = currentTime;
      }
    });

    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.metrics.pageLoadTime = loadTime;
      this.logMetric('Page Load Time', loadTime);
    });
  }

  logMetric(name, value) {
    console.log(`📊 ${name}: ${value.toFixed(2)}ms`);
    
    // Send to analytics if available
    if (window.gtag) {
      window.gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        event_category: 'performance'
      });
    }
  }

  logResourceTiming(entry) {
    const timing = {
      name: entry.name,
      type: entry.initiatorType,
      duration: entry.duration,
      size: entry.transferSize,
      startTime: entry.startTime
    };

    // Log slow resources
    if (entry.duration > 1000) {
      console.warn(`🐌 Slow resource: ${entry.name} (${entry.duration.toFixed(2)}ms)`);
    }
  }

  trackScrollDepth(depth) {
    // Track scroll depth milestones
    const milestones = [25, 50, 75, 90, 100];
    if (milestones.includes(depth)) {
      this.logMetric(`Scroll Depth ${depth}%`, Date.now());
    }
  }

  getMetrics() {
    return this.metrics;
  }

  // Performance optimization helpers
  preloadImage(src) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  }

  preloadScript(src) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'script';
    link.href = src;
    document.head.appendChild(link);
  }

  // Lazy loading helper
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }
}

export default new PerformanceService(); 