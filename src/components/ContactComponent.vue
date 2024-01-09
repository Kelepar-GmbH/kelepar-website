<script>
import useValidate from '@vuelidate/core'
import {required} from '@vuelidate/validators'

const WEB3FORMS_ACCESS_KEY = "ade71fee-66c2-4888-b0c9-c65a2bb8cc51";

export default {
  data() {
    return {
      v$: useValidate(),
      name: "",
      email: "",
      message: "",
    };
  },
  validations() {
    return {
      name: {required},
      email: {required},
      message: {required},
    }
  },
  methods: {
    async submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          console.log(result);
        }
      } else {

      }
    },
  },
};
</script>

<template>
  <section id="contact">
    <div class="main-container">
      <div class="content content-img">
        <div class="row center w-100 mvh-100">
          <div class="col center app-form-width">
            <h1 class="spacer">Contact Form</h1>
            <form @submit.prevent="submitForm">
              <div class="row">
                <div class="col">
                  <input class="app-form-control" type="text" name="name" placeholder="NAME" v-model="name"/>
                  <span class="app-form-error" v-if="v$.name.$error"> {{ v$.name.$errors[0].$message }} </span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input class="app-form-control" type="email" name="email" placeholder="EMAIL" v-model="email"/>
                  <span class="app-form-error" v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                    <textarea class="app-form-control" name="message" placeholder="MESSAGE"
                              v-model="message"></textarea>
                  <span class="app-form-error" v-if="v$.message.$error"> {{ v$.message.$errors[0].$message }} </span>
                </div>
              </div>
              <button class="app-form-button" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>

.spacer {
  margin-bottom: 40px;
}

.center {
  margin: auto auto;
}

.app-form-error {
  color: var(--kelepar-color-error);
}

.app-form-width {
  text-align: center;
  background: rgb(13, 33, 73);
  background: linear-gradient(0deg, rgba(13, 33, 73, 1) 0%, rgba(13, 33, 73, 0) 91%, rgba(13, 33, 73, 0) 100%);
  border-radius: 10px;
  margin: auto auto;
  max-width: 60vw;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid var(--kelepar-color-neutral);
  color: var(--kelepar-color-neutral);
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: var(--kelepar-color-neutral);
}

.app-form-control:focus::placeholder {
  color: var(--kelepar-color-highlight-one);
}

.app-form-control:focus {
  border-bottom-color: var(--kelepar-color-highlight-one);
}

.app-form-button {
  flex: 1 1 auto;
  border-radius: 0;
  padding: 10px 25px !important;
  text-align: center;
  background-size: 150% auto;
  text-transform: uppercase;
  text-decoration: none;
  transition: 500ms;
  border: 1px solid;
  color: var(--kelepar-color-highlight-one) !important;
  background-image: var(--kelepar-color-highlight-one);
  background-color: transparent;
  margin: 10px 0 30px 0;
}

.app-form-button:before {
  content: "";
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  z-index: -1;
}

.app-form-button:hover {
  background-position: right center;
  -webkit-box-shadow: 0 0 10px 5px var(--kelepar-color-highlight-one);
  -moz-box-shadow: 0 0 10px 5px var(--kelepar-color-highlight-one);
  box-shadow: 0 0 10px 5px var(--kelepar-color-highlight-one);
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  text-align: center;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.content-img {
  background-image: url(../assets/img/banners/intro_background.webp);
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  transition: 0.4s;
  color: var(--kelepar-color-highlight-one);
}

h1 {
  font-size: var(--h1-desktop);
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: bold;
}

p {
  font-size: 30px;
  margin: 0 0 20px 0;
}

@media (max-width: 1200px) {
  .app-form-width {
    max-width: 80vw;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: var(--h2-mobile);
  }

  p {
    font-size: var(--h3-mobile);
  }
}

@media (min-width: 575px) {
  .mvh-100 {
    min-height: 100vh;
  }
}


@media (max-width: 768px) {
  h1 {
    font-size: var(--h2-mobile);
  }

  p {
    font-size: var(--h3-mobile);
  }

  .content {
    justify-content: flex-start;
  }

  .app-form-width {
    max-width: 100vw;
  }
}

@media (max-width: 300px) {
  h1 {
    font-size: var(--h3-mobile);
  }

  p {
    font-size: var(--h4-mobile);
  }
}
</style>
<script setup></script>