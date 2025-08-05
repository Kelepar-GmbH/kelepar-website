<template>
  <div class="privacy-page">
    <div class="container">
      <h1>{{ $t('privacy_section.title') }}</h1>
      
      <section class="legal-section">
        <p>{{ $t('privacy_section.intro') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('privacy_section.responsible') }}</h2>
        <p v-html="$t('privacy_section.responsible_text')"></p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('privacy_section.data_collection') }}</h2>
        <p>{{ $t('privacy_section.data_collection_text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('privacy_section.your_rights') }}</h2>
        <p>{{ $t('privacy_section.your_rights_text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('privacy_section.contact') }}</h2>
        <p>{{ $t('privacy_section.contact_text') }}</p>
      </section>

      <div class="back-link">
        <RouterLink to="/" class="btn1">{{ $t('privacy_section.back_home') }}</RouterLink>
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