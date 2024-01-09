<template>
  <section id="intro">
    <div class="main-container">
      <div class="content content-img">
        <div class="row w-100 mvh-70 mobile-spacer">
          <div class="col center mobile-min-width">
            <div class="text no-padding-bottom">
              <h1>Kelepar</h1>
            </div>
            <div class="text spacer-top">
              <p>Building Innovative Software Solutions</p>
            </div>
          </div>
        </div>
        <div class="row w-100 mvh-30 mobile-move-bot">
          <div class="col center">
            <swiper class="swiper"
                    :breakpoints="{ 0:{ slidesPerView:2 }, 720:{ slidesPerView:2 }, 1100:{ slidesPerView:3}, 1350:{ slidesPerView:3} }"
                    :spaceBetween="10"
                    :slidesPerGroup="1"
                    :loop="false"
                    :autoplay="true"
                    :centered-slides="true"
                    :scrollbar="false"
                    :speed="100"
                    :navigation="false">
              <swiper-slide>
                <div class="box-pfp">
                  <a href="https://ashenhorizon.com" target="_blank" aria-label="Link to Ashen Horizon">
                    <div class="card">
                      <img class="center" src="@/assets/img/projects/ah.png" width="182" height="182"
                           alt="Ashen Horizon">
                    </div>
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box-pfp">
                  <a href="https://valus.ch" target="_blank" aria-label="Link to Valus AG">
                    <div class="card">
                      <img class="center" src="@/assets/img/projects/valus.png" width="182" height="182" alt="Valus AG">
                    </div>
                  </a>
                </div>
              </swiper-slide>
<!--              <swiper-slide>-->
              <!--                <div class="box-pfp">-->
              <!--                  <a href="https://sexologie-luzern.com" target="_blank" aria-label="Link to Sexologie Luzern">-->
              <!--                    <div class="card">-->
              <!--                      <img class="center" src="@/assets/img/projects/sexologie-luzern.png" width="182" height="182"-->
              <!--                           alt="Sexologie Luzern">-->
              <!--                    </div>-->
              <!--                  </a>-->
              <!--                </div>-->
              <!--              </swiper-slide>-->
            </swiper>
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

.spacer-top{
  padding-top: 10vh !important;
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

.no-padding {
  padding: 0;
}

.no-padding-bottom {
  padding-bottom: 0 !important;
}

.no-padding-top {
  padding-top: 0 !important;
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

.text {
  padding: 10px 0;
  text-align: center;
  color: var(--kelepar-color-black);
}

.box-pfp {
  padding: 0 14px 20px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  height: 130px;
  width: 130px;
  padding: 4px;
  border: none;
  border-radius: 0;
  background: rgba(13, 33, 73, 0) 100%;
}

.card img {
  height: auto;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  h1 {
    font-size: var(--h2-mobile);
  }

  p {
    font-size: var(--h3-mobile);
  }

  .mobile-spacer {
    padding-top: 10vh;
  }

  .mobile-min-width {
    min-width: 300px;
  }

  .desktop-only {
    display: none;
  }
}

@media (min-width: 575px) {
  .mvh-70 {
    min-height: 70vh;
  }

  .mvh-30 {
    min-height: 30vh;
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

  .mobile-move-bot {
    padding-top: 25vh;
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
<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
</script>