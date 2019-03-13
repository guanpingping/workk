// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入重置css样式
import "./common/css/reset.css";

/* 使用element-ui插件 */
import ElementUI from 'element-ui';
/* 下面这句话是引入element-ui的样式是必须写的 */
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false


/* 使用axios */
import server from "./axios/request";
Vue.prototype.$axios = server;

/* eslint-disable no-new */

/* 使用vuex */
import store from "./store";

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
