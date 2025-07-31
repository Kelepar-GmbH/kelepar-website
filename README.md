# Kelepar GmbH - Software Website

Eine moderne, professionelle Website für die Kelepar GmbH, spezialisiert auf IT-Consulting, Software-Entwicklung und DevOps mit Fokus auf Datenschutz und Schweizer Qualität.

## 🚀 Features

### Technische Features
- **Vue 3** mit Composition API
- **Vite** für schnelle Entwicklung und Builds
- **PWA Support** mit Service Worker
- **Performance Monitoring** mit Web Vitals
- **SEO Optimiert** mit Meta-Tags und Structured Data
- **Analytics Integration** (Google Analytics 4)
- **Cookie Consent** DSGVO-konform
- **Responsive Design** für alle Geräte
- **Accessibility** (WCAG-konform)
- **Internationalisierung** (Deutsch/Englisch)

### Rechtliche Compliance
- **Impressum** mit vollständigen Unternehmensinformationen
- **AGB** (Allgemeine Geschäftsbedingungen)
- **Datenschutzerklärung** DSGVO-konform
- **Cookie-Banner** mit Einwilligungsmanagement
- **Schweizer Recht** konform

### Performance Features
- **Lazy Loading** für Bilder und Komponenten
- **Code Splitting** für optimale Ladezeiten
- **Preload** kritischer Ressourcen
- **Service Worker** für Offline-Funktionalität
- **Core Web Vitals** Monitoring

## 📦 Installation

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm oder yarn

### Setup
```bash
# Repository klonen
git clone https://github.com/kelepar/kelepar-website.git
cd kelepar-website

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Produktion
npm run build

# Build analysieren
npm run analyze

# Lighthouse Report generieren
npm run lighthouse
```

## 🛠️ Entwicklung

### Projektstruktur
```
kelepar-website/
├── public/                 # Statische Assets
├── src/
│   ├── assets/            # Bilder, Styles, Fonts
│   ├── components/        # Vue Komponenten
│   ├── views/             # Seiten-Komponenten
│   ├── router/            # Vue Router Konfiguration
│   ├── locales/           # Internationalisierung
│   ├── services/          # Analytics, Performance Services
│   └── main.js           # App Entry Point
├── vite.config.js        # Vite Konfiguration
└── package.json          # Dependencies
```

### Wichtige Scripts
- `npm run dev` - Entwicklungsserver
- `npm run build` - Produktions-Build
- `npm run preview` - Build Vorschau
- `npm run analyze` - Bundle-Analyse
- `npm run lighthouse` - Performance-Report
- `npm run test` - Unit Tests
- `npm run test:coverage` - Test-Coverage

## 🔧 Konfiguration

### Analytics Setup
1. Google Analytics 4 Property erstellen
2. GA4-ID in `src/services/analytics.js` eintragen
3. Tracking-Events sind bereits implementiert

### Performance Monitoring
- Web Vitals werden automatisch getrackt
- Performance-Metriken in der Konsole sichtbar
- Analytics-Integration für Performance-Daten

### PWA Konfiguration
- Manifest-Datei automatisch generiert
- Service Worker für Offline-Funktionalität
- Icons müssen in `public/` hinzugefügt werden

## 📱 PWA Features

Die Website ist als Progressive Web App konfiguriert:
- **Installierbar** auf mobilen Geräten
- **Offline-Funktionalität** für gecachte Inhalte
- **Push-Notifications** (optional)
- **App-like Experience**

## 🔒 Sicherheit & Compliance

### Datenschutz
- DSGVO-konforme Cookie-Verwaltung
- Schweizer Datenschutzgesetz (DSG) konform
- Transparente Datenverarbeitung
- Opt-out für Analytics

### Sicherheits-Header
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

## 🌐 Deployment

### Produktions-Build
```bash
npm run build
```

### Hosting-Optionen
- **Netlify** (empfohlen)
- **Vercel**
- **Firebase Hosting**
- **GitHub Pages**

### Environment Variables
```env
VITE_GA_ID=G-XXXXXXXXXX
VITE_API_URL=https://api.kelepar.com
```

## 📊 Analytics & Monitoring

### Implementierte Tracking-Events
- Seitenaufrufe
- Kontaktformular-Interaktionen
- Performance-Metriken
- Fehler-Tracking
- User-Interaktionen

### Performance-Metriken
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)

## 🎨 Design System

### Farben
- Primary: `#1e225a` (Kelepar Blau)
- Secondary: `#f8f9fa` (Hellgrau)
- Accent: `#007bff` (Highlight)
- Error: `#dc3545` (Rot)

### Typography
- Font: Rubik (Google Fonts)
- Responsive Schriftgrößen
- Optimierte Zeilenabstände

## 🔧 Customization

### Inhalte anpassen
- Texte in `src/locales/de.json` und `en.json`
- Bilder in `src/assets/img/`
- Styling in `src/assets/styles/`

### Neue Seiten hinzufügen
1. Vue-Komponente in `src/views/` erstellen
2. Route in `src/router/index.js` hinzufügen
3. Lokalisierung in Sprachdateien ergänzen

## 🚀 Performance Optimierungen

### Implementiert
- Code Splitting
- Lazy Loading
- Image Optimization
- Critical CSS Inlining
- Service Worker Caching
- DNS Prefetching

### Monitoring
- Real User Monitoring (RUM)
- Core Web Vitals Tracking
- Error Tracking
- Performance Budgets

## 📞 Support

Bei Fragen oder Problemen:
- **E-Mail**: info@kelepar.com
- **Website**: https://kelepar.com
- **GitHub Issues**: Für technische Probleme

## 📄 Lizenz

© 2025 Kelepar GmbH. Alle Rechte vorbehalten.

---

**Made with ❤️ in Switzerland** 🇨🇭
