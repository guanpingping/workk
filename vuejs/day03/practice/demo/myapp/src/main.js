import Vue from 'vue'; 
import App from './App.vue';
import App1 from './App1.vue';
import App2 from './App2.vue';
//引入reset.css文件
import "./common/css/reset.css";
import"./common/js/flexble";

new Vue({
  el: '#app',
  render: h => h(App2)
})
