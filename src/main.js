import Vue from 'vue';
import App from './App.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Unicon from 'vue-unicons';
import { uniBars, uniAngleDown, uniWhatsapp, uniInstagramAlt, uniTwitter, uniFastMail, uniPlus } from 'vue-unicons/src/icons';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

Unicon.add([uniBars, uniAngleDown, uniWhatsapp, uniInstagramAlt, uniTwitter, uniFastMail, uniPlus]);
Vue.use(Unicon);

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/scss/index.scss';

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      duration: 700,
      once: true
    });
  },
  render: h => h(App)
}).$mount('#app');
