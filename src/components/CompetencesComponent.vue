<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// import required modules
import {Autoplay, Navigation, Pagination} from "swiper/modules";

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
      modules: [Autoplay, Navigation, Pagination],
    };
  },
};
</script>

<template>
  <section id="competences">
    <div class="blue-img">
      <div class="row w-100 mvh-100">
        <div class="col center no-padding">
          <swiper class="swiper"
                  :breakpoints="{ 0:{ slidesPerView:2 }, 720:{ slidesPerView:2 }, 1100:{ slidesPerView:3}, 1350:{ slidesPerView:4} }"
                  :spaceBetween="50"
                  :slides-per-group="1"
                  :autoplay="{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    waitForTransition: false,
                    reverseDirection: true
                  }"
                  :centered-slides="true"
                  :scrollbar="false"
                  :navigation="false">
            <swiper-slide>
              <div class="box-pfp">
                <div class="card">
                  <img class="center" src="@/assets/img/icons/icon_webdesign.png" width="182" height="182"
                       alt="Web Design">
                </div>
              </div>
              <div class="box-description">
                <h3>Web Development</h3>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="box-pfp">
                <div class="card">
                  <img class="center" src="@/assets/img/icons/icon_freelancing.png" width="182" height="182"
                       alt="Freelancing">
                </div>
              </div>
              <div class="box-description">
                <h3>Freelancing</h3>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="box-pfp">
                <div class="card">
                  <img class="center" src="@/assets/img/icons/icon_consulting.png" width="182" height="182"
                       alt="Consulting">
                </div>
              </div>
              <div class="box-description">
                <h3>Consulting</h3>
              </div>
            </swiper-slide>
          </swiper>
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

.mvh-100 {
  min-height: 30vh;
}

.blue-img {
  text-align: center;
  max-height: 40vh;
  background-color: var(--kelepar-color-second);
  width: 100%;
}

.no-padding {
  padding: 0;
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
  background-color: var(--kelepar-color-second);
}

.card img {
  height: auto;
  width: 100%;
  object-fit: cover;
}


@media (max-width: 768px) {
  h1 {
    font-size: var(--h3-mobile);
  }

  h3 {
    font-size: var(--h3-mobile);
  }

  p {
    font-size: var(--h4-mobile);
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