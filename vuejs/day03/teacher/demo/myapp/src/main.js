//引入vue.js文件
import Vue from 'vue'
//引入了App组件
import App from './App.vue';
//引入reset.css文件
import "./common/css/reset.css";
//移动端适配文件
import "./common/js/flexble";

//实例化
new Vue({
  el: '#app',
  //解析虚拟DOM
  //render: h => h(App)
  render:function(handle){
    //handle方法接受App组件  render函数进行渲染虚拟DOM
    return handle(App)
  }
})


/*
  .vue文件
    template
      当前标签下面只能有一个子元素

*/
