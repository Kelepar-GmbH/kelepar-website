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
  <div id="team">
    <div class="main-container">
      <div class="content white-img">
        <div class="container">
          <h2>The Team</h2>
          <div class="content">
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
                    :navigation="false"
                    :modules="modules">
              <swiper-slide>
                <div class="box-pfp">
                  <div class="card">
                    <img src="@/assets/img/team/lukas.webp" width="182" height="182" alt="Lukas PFP">
                  </div>
                </div>
                <div class="box-description">
                  <h3>Lukas Unterschütz</h3>
                  <p>CEO & Co-Founder</p>
                  <p>
                    Lukas is a serial entrepreneur and former competitive Hearthstone player. He has been active in the
                    crypto space as analyst, investor, and event organizer. Co-founding a web3 gaming startup was the
                    perfect opportunity to match his passions for entrepreneurship, crypto and gaming.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box-pfp">
                  <div class="card">
                    <img src="@/assets/img/team/lars.webp" width="182" height="182" alt="Lars PFP">
                  </div>
                </div>
                <div class="box-description">
                  <h3>Lars Stalder</h3>
                  <p>CTO & Co-Founder</p>
                  <p>
                    Lars studied software engineering and programmed at different multinational European software
                    companies. He is used to working with a variety of programming and smart contract languages.
                    Co-founding
                    Ashen Horizon was the perfect opportunity to break out of the golden cage and follow his passion for
                    gaming and web3.</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box-pfp">
                  <div class="card">
                    <img src="@/assets/img/team/luca.webp" width="182" height="182" alt="Luca PFP">
                  </div>
                </div>
                <div class="box-description">
                  <h3>Luca Raneri</h3>
                  <p>Full Stack Developer</p>
                  <p>
                    Luca has a Business-IT background and worked as a Senior IT-Auditor. He engaged with world
                    leading clients in traditional finance as well as in the crypto space. With his flair and passion
                    for
                    web development he builds stunning user-centric web experiences with a creative edge.</p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
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

.white-img {
  background-image: url(../assets/img/banners/white.webp);
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}

p {
  color: var(--kelepar-font-color-negative) !important;
  margin: 10px 0;
}

h2 {
  font-size: var(--h2-desktop);
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;
  padding: 20px 0 40px 0;
  color: var(--kelepar-font-color-negative) !important;
}

h3 {
  font-size: var(--h3-desktop);
  letter-spacing: 2px;
  color: var(--kelepar-font-color-negative) !important;
}

.box-pfp {
  padding: 0 14px 20px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-description {
  text-align: center;
  padding: 0 14px 50px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  height: 190px;
  width: 190px;
  padding: 4px;
  border-color: var(--kelepar-color-highlight-one);
  border-radius: 0;
}

.card img {
  height: auto;
  width: 100%;
  object-fit: cover;
}

.container {
  margin: 0 auto;
  padding: 50px 10px;
  max-width: 1500px;
}

.content {
  display: flex;
  flex-direction: row;
  place-content: center;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1600px) {
  p {
    font-size: var(--p-mobile);
  }
}

@media (max-width: 992px) {
  h2 {
    font-size: var(--h2-mobile);
  }
}

</style>