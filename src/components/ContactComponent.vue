<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const formSubmitted = ref(false);
const error = ref('');

const WEB3FORMS_ACCESS_KEY = "ade71fee-66c2-4888-b0c9-c65a2bb8cc51";

async function submitForm() {
  error.value = '';
  if (!name.value || !email.value || !message.value) {
    error.value = 'Bitte alle Felder ausfüllen.';
    return;
  }
  formSubmitted.value = true;
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  });
  const result = await response.json();
  if (!result.success) {
    error.value = 'Fehler beim Senden. Bitte versuchen Sie es später erneut.';
    formSubmitted.value = false;
  }
}
</script>

<template>
  <section id="contact">
    <div class="contact-container">
      <h2>{{ $t('contact.title') }}</h2>
      <div class="contact-card">
        <form v-if="!formSubmitted" @submit.prevent="submitForm">
          <div class="form-group">
            <input v-model="name" type="text" :placeholder="$t('contact.name')" />
          </div>
          <div class="form-group">
            <input v-model="email" type="email" :placeholder="$t('contact.email')" />
          </div>
          <div class="form-group">
            <textarea v-model="message" rows="5" :placeholder="$t('contact.message')"></textarea>
          </div>
          <div v-if="error" class="form-error">{{ error }}</div>
          <button class="btn1 contact-btn" type="submit">{{ $t('contact.cta') }}</button>
          <div class="contact-privacy">{{ $t('contact.privacy') }}</div>
        </form>
        <div v-else class="form-success">
          <h3>{{ $t('contact.successTitle') }}</h3>
          <p>{{ $t('contact.successText') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 10rem 1rem 7rem 1rem;
  text-align: center;
}
@media (max-width: 900px) {
  .contact-container {
    padding-top: 9rem;
    padding-bottom: 6rem;
  }
}
h2 {
  font-size: var(--h2-desktop);
  color: var(--kelepar-color-main);
  margin-bottom: 2.5rem;
  font-weight: 700;
}
.contact-card {
  background: #fff;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-group {
  width: 100%;
  margin-bottom: 1.5rem;
}
input, textarea {
  width: 100%;
  padding: 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--kelepar-color-second);
  background: var(--kelepar-color-second);
  color: var(--kelepar-color-black);
  font-size: 1.1em;
  outline: none;
  transition: border-color 0.2s;
}
input:focus, textarea:focus {
  border-color: var(--kelepar-color-highlight-one);
}
.contact-btn {
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1.1em;
  padding: 0.8em 0;
}
.form-error {
  color: var(--kelepar-color-error);
  margin-bottom: 1rem;
}
.form-success {
  text-align: center;
  color: var(--kelepar-color-main);
}
.form-success h3 {
  margin-bottom: 1rem;
}
.contact-privacy {
  margin-top: 1.5rem;
  font-size: 0.95em;
  color: var(--kelepar-color-black);
  opacity: 0.7;
}
</style>