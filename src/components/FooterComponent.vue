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
          <a href="/contact">{{ $t('contact') }}</a>
        </div>
        <div class="footer-meta">
          <span>© 2025 Kelepar GmbH</span>
          <span>Made with ❤️ in Switzerland</span>
          <a href="/privacy">{{ $t('privacy') }}</a>
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
  padding: 2rem 0 1rem 0;
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
  gap: 1.5rem;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: var(--kelepar-color-main);
  font-size: 1.2em;
}
.footer-links {
  display: flex;
  gap: 2rem;
}
.footer-links a {
  color: var(--kelepar-color-highlight-one);
  text-decoration: none;
  font-weight: 500;
  font-size: 1em;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: var(--kelepar-color-highlight-two);
}
.footer-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  color: var(--kelepar-color-black);
  font-size: 0.95em;
}
.footer-meta a {
  color: var(--kelepar-color-highlight-one);
  text-decoration: underline;
  font-size: 0.95em;
}
@media (max-width: 900px) {
  .container {
    padding: 0 1rem;
  }
  .footer-content {
    gap: 1rem;
  }
  .footer-links {
    gap: 1rem;
  }
}
</style>