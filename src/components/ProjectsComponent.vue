<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// import required modules
import {Pagination, Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
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
                    :breakpoints="{ 0:{ slidesPerView:1 }, 720:{ slidesPerView:2 }, 1100:{ slidesPerView:3}, 1350:{ slidesPerView:4} }"
                    :spaceBetween="0"
                    :slidesPerGroup="1"
                    :centerSlide="true"
                    :loop="false"
                    :loopFillGroupWithBlank="true"
                    :pagination="{
                  clickable: true,
                }"
                    :navigation="true"
                    :modules="modules">
              <swiper-slide>
                <div class="box-pfp">
                  <div class="card">
                    <img src="@/assets/img/projects/ah.png" width="182" height="182" alt="Ashen Horizon">
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box-pfp">
                  <div class="card">
                    <img src="@/assets/img/projects/lars.webp" width="182" height="182" alt="Lars PFP">
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box-pfp">
                  <div class="card">
                    <img src="@/assets/img/projects/luca.webp" width="182" height="182" alt="Luca PFP">
                  </div>
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

.blue-img {
  background-image: url(../assets/img/banners/oxford-blue.webp);
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
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
  height: 190px;
  width: 190px;
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