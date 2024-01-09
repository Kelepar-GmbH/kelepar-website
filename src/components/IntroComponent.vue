<template>
  <section id="intro">
    <div class="main-container">
      <div class="content blue-img">
        <div class="row w-100 mvh-100 mobile-spacer">
          <div class="col center mobile-min-width">
            <div class="text text-top">
              <h1>Kelepar</h1>
            </div>
            <div class="text text-bot">
              <p>Software</p>
            </div>
          </div>
          <div class="col no-padding">
            <div class="content-image mvh-100"></div>
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
  background-image: url(../assets/img/banners/bondi-blue.webp);
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.content-image {
  background-image: url(../assets/img/software_img.webp);
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
  color: var(--kelepar-color-highlight-one);
}

h1 {
  font-size: var(--h1-desktop);
  letter-spacing: 3px;
  text-transform: uppercase;
}

p {
  font-size: 30px;
  margin: 0 0 20px 0;
}

.text {
  padding: 10px 0;
  text-align: center;
  color: var(--kelepar-color-black);
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

  .content-image {
    max-height: 45vh;
  }

  .mobile-min-width {
    min-width: 300px;
    padding-top: 100px;
  }

  .content {
    justify-content: flex-start;
  }
}

@media (max-width: 570px) {
  .button {
    padding: 10px 0;
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