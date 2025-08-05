<template>
  <div class="impressum-page">
    <div class="container">
      <h1>Impressum</h1>
      
      <section class="legal-section">
        <h2>Unternehmen</h2>
        <div class="company-info">
          <p><strong>Kelepar GmbH</strong></p>
          <p>Museggstrasse 17</p>
          <p>6004 Luzern</p>
          <p>Schweiz</p>
        </div>
      </section>

      <section class="legal-section">
        <h2>Kontakt</h2>
        <div class="contact-info">
          <p><strong>E-Mail:</strong> info@kelepar.com</p>
          <p><strong>Website:</strong> www.kelepar.com</p>
        </div>
      </section>

      <section class="legal-section">
        <h2>Rechtliche Informationen</h2>
        <div class="legal-info">
          <p><strong>Handelsregister:</strong> CHE-407.597.854</p>
          <p><strong>MWST-Nummer:</strong> CHE-407.597.854 MWST</p>
          <p><strong>Aufsichtsbehörde:</strong> Handelsregisteramt Luzern</p>
        </div>
      </section>

      <section class="legal-section">
        <h2>Verantwortlichkeit</h2>
        <p>Die Kelepar GmbH ist für den Inhalt dieser Website verantwortlich. Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
      </section>

      <section class="legal-section">
        <h2>Haftungsausschluss</h2>
        <p>Die Informationen auf dieser Website werden sorgfältig gepflegt. Wir können jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen übernehmen. Eine Haftung für Schäden, die sich aus der Nutzung der bereitgestellten Informationen ergeben, ist ausgeschlossen.</p>
      </section>

      <section class="legal-section">
        <h2>Urheberrecht</h2>
        <p>Alle Inhalte dieser Website sind urheberrechtlich geschützt. Die Vervielfältigung, Verbreitung oder öffentliche Zugänglichmachung der Inhalte ist ohne ausdrückliche Zustimmung der Kelepar GmbH nicht gestattet.</p>
      </section>

      <section class="legal-section">
        <h2>Partner-Referenzen</h2>
        <p>Die Firmenlogos, die in der Partner-Showcase auf unserer Website angezeigt werden, repräsentieren Organisationen, mit denen unsere Teammitglieder bereits berufliche Erfahrungen gesammelt haben. Diese Referenzen spiegeln individuelle Arbeitserfahrung und Expertise wider, nicht unbedingt direkte Geschäftsbeziehungen unter der Kelepar GmbH.</p>
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
.impressum-page {
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

.company-info,
.contact-info,
.legal-info {
  line-height: 1.8;
}

.company-info p,
.contact-info p,
.legal-info p {
  margin-bottom: 0.5rem;
  color: var(--kelepar-font-color);
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
  .impressum-page {
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