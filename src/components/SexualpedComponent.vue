<template>
  <section id="sexualped">
    <div class="main-container">
      <div class="content yellow-img">
        <div class="row w-100 mvh-100">
          <div class="col no-padding">
            <div class="content-image mvh-100"></div>
          </div>
          <div class="col center mobile-min-width">
            <div class="text">
              <h1>Sexualpädagogik</h1>
            </div>
            <div class="text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ipsum tellus, pretium nec rhoncus
                eget.</p>
            </div>
            <div class="links">
              <div class="button">
                <a class="btn2" href="" target="" aria-label="Mehr erfahren">Mehr erfahren</a>
              </div>
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

.yellow-img {
  background-image: url(../assets/img/banners/yellow.webp);
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.content-image {
  background-image: url(../assets/img/condoms.webp);
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

a {
  color: var(--sex-color-black);
}

.button {
  padding: 5px 10px;
  margin: 0 auto;
}

.btn1,
.btn2 {
  width: 200px;
  border: 2px solid;
  border-color: var(--sex-color-black);
  border-radius: 0;
}

.links {
  display: flex;
  flex-direction: row;
  padding: 20px;
  text-align: center;
}

.text {
  padding: 10px 0;
  text-align: center;
  color: var(--sex-color-black);
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
    padding-top: 50px;
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