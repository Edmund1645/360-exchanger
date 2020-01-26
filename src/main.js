import Vue from 'vue';
import App from './App.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Unicon from 'vue-unicons';
import { uniBars, uniAngleDown, uniWhatsapp, uniInstagramAlt, uniTwitter, uniFastMail } from 'vue-unicons/src/icons';

Unicon.add([uniBars, uniAngleDown, uniWhatsapp, uniInstagramAlt, uniTwitter, uniFastMail]);
Vue.use(Unicon);

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/scss/index.scss';
import './assets/css/animate.css';

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      duration: 700
      // once: true
    });
  },
  render: h => h(App)
}).$mount('#app');
