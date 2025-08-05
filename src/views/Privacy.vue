<template>
  <div class="privacy-page">
    <div class="container">
      <h1>Datenschutzerklärung</h1>
      
      <section class="legal-section">
        <p>Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf dieser Website.</p>
      </section>

      <section class="legal-section">
        <h2>Verantwortlichkeit</h2>
        <p>Kelepar GmbH<br>Museggstrasse 17<br>6004 Luzern<br>Schweiz<br>E-Mail: info@kelepar.com</p>
      </section>

      <section class="legal-section">
        <h2>Erhebung und Verarbeitung von Daten</h2>
        <p>Wir erheben und verarbeiten personenbezogene Daten nur im notwendigen Umfang und ausschließlich für die angegebenen Zwecke.</p>
      </section>

      <section class="legal-section">
        <h2>Ihre Rechte</h2>
        <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.</p>
      </section>

      <section class="legal-section">
        <h2>Kontakt</h2>
        <p>Bei Fragen zum Datenschutz kontaktieren Sie uns gerne unter info@kelepar.com</p>
      </section>

      <div class="back-link">
        <RouterLink to="/" class="btn1">Zurück zur Startseite</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.privacy-page {
  padding: 8rem 1rem 4rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.container {
  background: var(--kelepar-color-neutral);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 3rem 2rem;
}

h1 {
  font-size: var(--h1-desktop);
  color: var(--kelepar-color-main);
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: 700;
}

.legal-section {
  margin-bottom: 2.5rem;
}

h2 {
  font-size: var(--h3-desktop);
  color: var(--kelepar-color-main);
  margin-bottom: 1rem;
  font-weight: 600;
  border-bottom: 2px solid var(--kelepar-color-highlight-one);
  padding-bottom: 0.5rem;
}

p {
  line-height: 1.8;
  color: var(--kelepar-font-color);
  margin-bottom: 1rem;
}

.back-link {
  text-align: center;
  margin-top: 3rem;
}

.back-link .btn1 {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
}

@media (max-width: 900px) {
  .privacy-page {
    padding: 6rem 1rem 3rem 1rem;
  }
  
  .container {
    padding: 2rem 1.5rem;
  }
  
  h1 {
    font-size: var(--h2-desktop);
  }
  
  h2 {
    font-size: var(--h4-desktop);
  }
}
</style> 