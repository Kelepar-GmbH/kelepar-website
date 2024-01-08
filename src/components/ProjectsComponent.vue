<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// import required modules
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<template>
  <section id="projects">
    <div class="main-container">
      <div class="content blue-img">
        <div class="row w-100 mvh-100">
          <div class="col center">
            <swiper class="swiper"
                    :breakpoints="{ 0:{ slidesPerView:2 }, 720:{ slidesPerView:2 }, 1100:{ slidesPerView:3}, 1350:{ slidesPerView:4} }"
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
              <swiper-slide>
                <div class="box-pfp">
                  <a href="https://sexologie-luzern.com" target="_blank" aria-label="Link to Sexologie Luzern">
                    <div class="card">
                      <img class="center" src="@/assets/img/projects/sexologie-luzern.png" width="182" height="182" alt="Sexologie Luzern">
                    </div>
                  </a>
                </div>
              </swiper-slide>
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
  max-height: 40vh;
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 40vh;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  text-align: center;
  flex-direction: column;
}

.mvh-100 {
  min-height: 30vh;
}

.blue-img {
  max-height: 40vh;
  background-color: var(--kelepar-color-main);
  width: 100%;
}

p {
  color: var(--kelepar-font-color) !important;
  margin: 10px 0;
}

h2 {
  font-size: var(--h2-desktop);
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;
  padding: 20px 0 40px 0;
  color: var(--kelepar-font-color) !important;
}

h3 {
  font-size: var(--h3-desktop);
  letter-spacing: 2px;
  color: var(--kelepar-font-color) !important;
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
  border-radius: 100%;
  background-color: var(--kelepar-color-main);
}

.card img {
  height: auto;
  width: 100%;
  object-fit: cover;
}

.content {
  display: flex;
  flex-direction: row;
  place-content: center;
  justify-content: center;
  align-items: center;
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