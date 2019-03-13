import Vue from 'vue'
import App from './App.vue'
import oBserver from "./observer";
Vue.prototype.Observer = oBserver;

import "./common/css/reset.css";
import "./common/js/flexble";



new Vue({
  el: '#app',
  render: h => h(App)
})

/*
  动态组件
    将多个组件挂载在同一挂载点上，通过is属性来动态切换组件

  动态组件通过一个标签 <component is=""></component>


  如何实现组件样式的私有化

  scoped:
    将当前组件的样式私有化






    

  什么叫做路由？
    根据用户请求路径的不同返回不同的数据或者页面

    前端路由
      根据用户请求路径的不同渲染不同的数据   根据hash值的不同来渲染不同的数据

    后端路由
      根据用户请求路径的不同返回不同的数据或者页面
*/

