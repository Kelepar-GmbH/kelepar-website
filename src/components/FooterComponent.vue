<script setup></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <img src="@/assets/img/logos/kelepar_k.png" width="40" height="40" alt="Kelepar Logo">
          <span>Kelepar GmbH – Swiss AI Consulting</span>
        </div>
        
        <div class="footer-links">
          <a href="/#aboutus">{{ $t('aboutus') }}</a>
          <a href="/#competences">{{ $t('competences') }}</a>
          <a href="/#team">{{ $t('team') }}</a>
          <a href="/contact">{{ $t('contact') }}</a>
        </div>
        
        <div class="footer-legal">
          <a href="/impressum">Impressum</a>
          <a href="/agb">AGB</a>
          <a href="/privacy">{{ $t('privacy') }}</a>
        </div>
        
        <div class="footer-meta">
          <span>© 2025 Kelepar GmbH</span>
          <span>{{ $t('footer.madeInSwitzerland') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--kelepar-color-neutral);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  box-shadow: var(--box-shadow);
  padding: 2.5rem 0 1.5rem 0;
  margin-top: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: var(--kelepar-color-main);
  font-size: 1.2em;
  transition: transform 0.2s ease;
}

.footer-brand:hover {
  transform: scale(1.02);
}

.footer-brand img {
  transition: transform 0.2s ease;
}

.footer-brand:hover img {
  transform: rotate(5deg);
}

.footer-links {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  color: var(--kelepar-color-highlight-one);
  text-decoration: none;
  font-weight: 500;
  font-size: 1em;
  transition: all 0.2s ease;
  position: relative;
  padding: 0.5rem 0;
}

.footer-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--kelepar-color-highlight-two);
  transition: width 0.2s ease;
}

.footer-links a:hover {
  color: var(--kelepar-color-highlight-two);
  transform: translateY(-1px);
}

.footer-links a:hover::after {
  width: 100%;
}

.footer-legal {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid var(--kelepar-color-second);
  width: 100%;
  max-width: 400px;
}

.footer-legal a {
  color: var(--kelepar-color-black);
  text-decoration: none;
  font-weight: 400;
  font-size: 0.9em;
  transition: all 0.2s ease;
  opacity: 0.8;
}

.footer-legal a:hover {
  color: var(--kelepar-color-highlight-one);
  opacity: 1;
  transform: translateY(-1px);
}

.footer-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--kelepar-color-black);
  font-size: 0.9em;
  opacity: 0.7;
  text-align: center;
}

.footer-meta span:first-child {
  font-weight: 500;
}

@media (max-width: 900px) {
  .container {
    padding: 0 1rem;
  }
  
  .footer-content {
    gap: 1.5rem;
  }
  
  .footer-links {
    gap: 1.5rem;
  }
  
  .footer-legal {
    gap: 1.5rem;
  }
}

@media (max-width: 600px) {
  .footer {
    padding: 2rem 0 1rem 0;
  }
  
  .footer-links {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-legal {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-brand {
    text-align: center;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>