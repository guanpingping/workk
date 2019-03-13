import Vue from 'vue'
import App from './App.vue'
import oBserver from "./observer";
Vue.prototype.Observer = oBserver;




new Vue({
  el: '#app',
  render: h => h(App)
})


