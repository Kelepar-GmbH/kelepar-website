<template>
  <section id="welcome">
    <div class="main-container">
      <div class="content orange-img">
        <div class="center">
          <div class="text">
            <h1>Willkommen</h1>
          </div>
          <div class="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ipsum tellus, pretium nec rhoncus eget,
              sagittis quis augue. Nullam dictum eget lacus eu pretium.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

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

.orange-img {
  background-image: url(../assets/img/banners/orange.webp);
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

.center {
  margin: 0 auto;
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
  padding: 10px 60px;
  text-align: center;
  color: var(--sex-color-black);
}

@media (max-width: 768px) {
  h1 {
    font-size: var(--h2-mobile);
  }

  p {
    font-size: var(--h3-mobile);
  }

  .text {
    padding: 10px 10px;
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