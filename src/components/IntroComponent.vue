<template>
  <section id="intro">
    <div class="main-container">
      <div class="content white-img">
        <div class="row w-100 mobile-spacer">
          <div class="col center mobile-min-width">
            <div class="text text-top">
              <h1>Sara<br/>Waldispühl</h1>
            </div>
            <div class="text text-bot">
              <p>SEXOLOGIE</p>
            </div>
          </div>
          <div class="w-100 breaker-element"></div>
          <div class="col-4 no-padding desktop-large-only">
            <div class="sara-img"></div>
          </div>
          <div class="col no-padding desktop-only">
            <div class="sara-img"></div>
          </div>
          <div class="col no-padding mobile-only">
            <div class="sara-img"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>

.center {
  margin: auto auto;
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

.white-img {
  background-image: url(../assets/img/banners/white.webp);
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.sara-img {
  background-image: url(../assets/img/sara.webp);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 66vh;
  min-width: 20vh;
}

.no-padding {
  padding: 0;
}

a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  transition: 0.4s;
  color: var(--sex-color-orange);
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

.text {
  padding: 10px 0;
  text-align: center;
  color: var(--sex-color-black);
}

@media (min-width: 1200px) {
  .breaker-element {
    display: none;
  }

  .desktop-only {
    display: none;
  }
}

@media (max-width: 1200px) {
  .desktop-large-only {
    display: none;
  }
}

@media (min-width: 769px) {
  .mobile-only {
    display: none;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: var(--h2-mobile);
  }

  p {
    font-size: var(--h3-mobile);
  }

  .mobile-spacer {
    padding-top: 25vh;
  }

  .mobile-min-width {
    min-width: 300px;
  }

  .text-top {
    padding-bottom: 0;
  }

  .text-bot {
    padding-top: 0;
  }

  .desktop-only {
    display: none;
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