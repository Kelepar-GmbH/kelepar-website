<template>
  <section id="uebermich">
    <div class="main-container">
      <div class="content blue-img">
        <div class="row w-100">
          <div class="col-4 no-padding desktop-large-only">
            <div class="content-image"></div>
          </div>
          <div class="col no-padding desktop-only">
            <div class="content-image"></div>
          </div>
          <div class="col no-padding mobile-only">
            <div class="content-image"></div>
          </div>
          <div class="w-100 breaker-element"></div>
          <div class="col center mobile-min-width spacer-top">
            <div class="text">
              <h1>Über mich</h1>
            </div>
            <div class="text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ipsum tellus, pretium nec rhoncus
                eget.</p>
            </div>
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

.blue-img {
  background-image: url(../assets/img/banners/blue.webp);
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.content-image {
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
  margin: 20px 0 0 0;
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

  .spacer-top {
    padding-top: 40px;
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

  .content-image {
    max-height: 45vh;
  }

  .mobile-min-width {
    min-width: 300px;
    padding-top: 50px;
  }

  .desktop-only {
    display: none;
  }

  .content {
    justify-content: flex-start;
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