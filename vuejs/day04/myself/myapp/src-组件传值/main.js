import Vue from 'vue'
import App from './App.vue'
import observer from './observer.js'
/*引入observe人.js文件，把它放在原型对象上*/
Vue.prototype.Observer = observer;

new Vue({
  el: '#app',
  render: h => h(App)
})
