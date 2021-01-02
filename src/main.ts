import Vue from 'vue';
import router from "./router";
import store from "./store";
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);

const app = new Vue({
  el: '#app',
  router,
  store,
  template: "<router-view />"
});
