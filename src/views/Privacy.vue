<template>
  <div class="privacy-page">
    <div class="container">
      <h1>{{ getTranslation('privacy_section.title', 'Datenschutzerklärung') }}</h1>
      
      <section class="legal-section">
        <p>{{ getTranslation('privacy_section.intro', 'Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf dieser Website.') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ getTranslation('privacy_section.responsible', 'Verantwortlichkeit') }}</h2>
        <p v-html="getTranslation('privacy_section.responsible_text', 'Kelepar GmbH<br>Museggstrasse 17<br>6004 Luzern<br>Schweiz<br>E-Mail: info@kelepar.com')"></p>
      </section>

      <section class="legal-section">
        <h2>{{ getTranslation('privacy_section.data_collection', 'Erhebung und Verarbeitung von Daten') }}</h2>
        <p>{{ getTranslation('privacy_section.data_collection_text', 'Wir erheben und verarbeiten personenbezogene Daten nur im notwendigen Umfang und ausschließlich für die angegebenen Zwecke.') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ getTranslation('privacy_section.your_rights', 'Ihre Rechte') }}</h2>
        <p>{{ getTranslation('privacy_section.your_rights_text', 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ getTranslation('privacy_section.contact', 'Kontakt') }}</h2>
        <p>{{ getTranslation('privacy_section.contact_text', 'Bei Fragen zum Datenschutz kontaktieren Sie uns gerne unter info@kelepar.com') }}</p>
      </section>

      <div class="back-link">
        <RouterLink to="/" class="btn1">{{ getTranslation('privacy_section.back_home', 'Zurück zur Startseite') }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const getTranslation = (key, fallback) => {
  try {
    const translation = t(key);
    return translation || fallback;
  } catch (error) {
    return fallback;
  }
};
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