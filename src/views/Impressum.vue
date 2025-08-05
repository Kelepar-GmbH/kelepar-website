<template>
  <div class="impressum-page">
    <div class="container">
      <h1>Legal Notice</h1>
      
      <section class="legal-section">
        <h2>Company</h2>
        <div class="company-info">
          <p><strong>Kelepar GmbH</strong></p>
          <p>Museggstrasse 17</p>
          <p>6004 Lucerne</p>
          <p>Switzerland</p>
        </div>
      </section>

      <section class="legal-section">
        <h2>Contact</h2>
        <div class="contact-info">
          <p><strong>Email:</strong> info@kelepar.com</p>
          <p><strong>Website:</strong> www.kelepar.com</p>
        </div>
      </section>

      <section class="legal-section">
        <h2>Legal Information</h2>
        <div class="legal-info">
          <p><strong>Commercial Register:</strong> CHE-407.597.854</p>
          <p><strong>VAT Number:</strong> CHE-407.597.854 VAT</p>
          <p><strong>Supervisory Authority:</strong> Commercial Register Office Lucerne</p>
        </div>
      </section>

      <section class="legal-section">
        <h2>Responsibility</h2>
        <p>Kelepar GmbH is responsible for the content of this website. Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.</p>
      </section>

      <section class="legal-section">
        <h2>Disclaimer</h2>
        <p>The information on this website is carefully maintained. However, we cannot guarantee the accuracy, completeness and timeliness of the information provided. Liability for damages arising from the use of the provided information is excluded.</p>
      </section>

      <section class="legal-section">
        <h2>Copyright</h2>
        <p>All content on this website is protected by copyright. Reproduction, distribution or public accessibility of the content is not permitted without the express consent of Kelepar GmbH.</p>
      </section>

      <section class="legal-section">
        <h2>Partner References</h2>
        <p>The company logos displayed in the partner showcase on our website represent organizations with which our team members have had professional experience. These references reflect individual work history and expertise, not necessarily direct business relationships under the Kelepar GmbH entity.</p>
      </section>

      <div class="back-link">
        <RouterLink to="/" class="btn1">Back to Homepage</RouterLink>
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