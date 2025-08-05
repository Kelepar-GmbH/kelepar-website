<template>
  <div class="impressum-page">
    <div class="container">
      <h1>{{ $t('impressum.title') }}</h1>
      
      <section class="legal-section">
        <h2>{{ $t('impressum.company.title') }}</h2>
        <div class="company-info">
          <p><strong>{{ $t('impressum.company.name') }}</strong></p>
          <p>{{ $t('impressum.company.address.street') }}</p>
          <p>{{ $t('impressum.company.address.city') }}</p>
          <p>{{ $t('impressum.company.address.country') }}</p>
        </div>
      </section>

      <section class="legal-section">
        <h2>{{ $t('impressum.contact.title') }}</h2>
        <div class="contact-info">
          <p><strong>{{ $t('impressum.contact.email') }}:</strong> {{ $t('impressum.contact.emailAddress') }}</p>
          <p><strong>{{ $t('impressum.contact.website') }}:</strong> {{ $t('impressum.contact.websiteUrl') }}</p>
        </div>
      </section>

      <section class="legal-section">
        <h2>{{ $t('impressum.legal.title') }}</h2>
        <div class="legal-info">
          <p><strong>{{ $t('impressum.legal.registry') }}:</strong> {{ $t('impressum.legal.registryNumber') }}</p>
          <p><strong>{{ $t('impressum.legal.vat') }}:</strong> {{ $t('impressum.legal.vatNumber') }}</p>
          <p><strong>{{ $t('impressum.legal.authority') }}:</strong> {{ $t('impressum.legal.authorityName') }}</p>
        </div>
      </section>

      <section class="legal-section">
        <h2>{{ $t('impressum.responsibility.title') }}</h2>
        <p>{{ $t('impressum.responsibility.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('impressum.disclaimer.title') }}</h2>
        <p>{{ $t('impressum.disclaimer.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('impressum.copyright.title') }}</h2>
        <p>{{ $t('impressum.copyright.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('impressum.references.title') }}</h2>
        <p>{{ $t('impressum.references.text') }}</p>
      </section>

      <div class="back-link">
        <RouterLink to="/" class="btn1">{{ $t('impressum.backHome') }}</RouterLink>
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