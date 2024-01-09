import './assets/styles/main.css'
import {createApp} from 'vue'

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// import function to register Swiper custom elements
import {register} from 'swiper/element/bundle';
// register Swiper custom elements
register();

const app = createApp(App)

app.use(router)

app.mount('#app')
