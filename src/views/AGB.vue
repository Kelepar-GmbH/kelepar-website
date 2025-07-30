<template>
  <div class="agb-page">
    <div class="container">
      <h1>{{ $t('agb.title') }}</h1>
      
      <section class="legal-section">
        <h2>{{ $t('agb.scope.title') }}</h2>
        <p>{{ $t('agb.scope.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('agb.services.title') }}</h2>
        <p>{{ $t('agb.services.text') }}</p>
        <ul>
          <li>{{ $t('agb.services.item1') }}</li>
          <li>{{ $t('agb.services.item2') }}</li>
          <li>{{ $t('agb.services.item3') }}</li>
          <li>{{ $t('agb.services.item4') }}</li>
        </ul>
      </section>

      <section class="legal-section">
        <h2>{{ $t('agb.contract.title') }}</h2>
        <p>{{ $t('agb.contract.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('agb.pricing.title') }}</h2>
        <p>{{ $t('agb.pricing.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('agb.payment.title') }}</h2>
        <p>{{ $t('agb.payment.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('agb.delivery.title') }}</h2>
        <p>{{ $t('agb.delivery.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('agb.liability.title') }}</h2>
        <p>{{ $t('agb.liability.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('agb.dataProtection.title') }}</h2>
        <p>{{ $t('agb.dataProtection.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('agb.termination.title') }}</h2>
        <p>{{ $t('agb.termination.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('agb.law.title') }}</h2>
        <p>{{ $t('agb.law.text') }}</p>
      </section>

      <section class="legal-section">
        <h2>{{ $t('agb.changes.title') }}</h2>
        <p>{{ $t('agb.changes.text') }}</p>
      </section>

      <div class="back-link">
        <RouterLink to="/" class="btn1">{{ $t('agb.backHome') }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.agb-page {
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

ul {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

li {
  line-height: 1.8;
  color: var(--kelepar-font-color);
  margin-bottom: 0.5rem;
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
  .agb-page {
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