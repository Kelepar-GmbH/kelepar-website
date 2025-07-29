<template>
  <main>
    <div class="privacy-container">
      <div class="privacy-content">
        <h1>{{ $t('privacy_section.title') }}</h1>
        <div class="privacy-text">
          <p>{{ $t('privacy_section.intro') }}</p>
          
          <h2>{{ $t('privacy_section.responsible') }}</h2>
          <p v-html="$t('privacy_section.responsible_text')"></p>
          
          <h2>{{ $t('privacy_section.data_collection') }}</h2>
          <p>{{ $t('privacy_section.data_collection_text') }}</p>
          
          <h2>{{ $t('privacy_section.your_rights') }}</h2>
          <p>{{ $t('privacy_section.your_rights_text') }}</p>
          
          <h2>{{ $t('privacy_section.contact') }}</h2>
          <p>{{ $t('privacy_section.contact_text') }}</p>
        </div>
        <RouterLink class="btn1 back-btn" to="/">{{ $t('privacy_section.back_home') }}</RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.privacy-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.privacy-content {
  background: #fff;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 3rem;
  width: 100%;
}

.privacy-content h1 {
  font-size: var(--h1-desktop);
  color: var(--kelepar-color-main);
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}

.privacy-content h2 {
  font-size: var(--h3-desktop);
  color: var(--kelepar-color-main);
  font-weight: 600;
  margin: 2rem 0 1rem 0;
}

.privacy-text p {
  font-size: 1.1em;
  color: var(--kelepar-color-black);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.back-btn {
  display: inline-block;
  margin-top: 2rem;
  font-size: 1.1em;
  padding: 0.8em 2em;
  text-align: center;
}

@media (max-width: 900px) {
  .privacy-container {
    padding: 2rem 1rem;
  }
  
  .privacy-content {
    padding: 2rem;
  }
  
  .privacy-content h1 {
    font-size: var(--h2-desktop);
  }
  
  .privacy-content h2 {
    font-size: var(--h4-desktop);
  }
  
  .privacy-text p {
    font-size: 1em;
  }
}
</style> 