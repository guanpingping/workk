import Vue from 'vue'
import App from './App.vue'
import Observer from "./observer";

Vue.prototype.Observer = Observer;
new Vue({
  el: '#app',
  render: h => h(App)
})
