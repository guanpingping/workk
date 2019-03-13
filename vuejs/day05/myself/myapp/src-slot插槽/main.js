import Vue from 'vue'
import App from './App.vue'

//引入reset 移动端适配文件
import "./common/css/reset.css";
import "./common/js/flexble";

new Vue({
  el: '#app',
  render: h => h(App)
})
