import Vue from 'vue'
import App from './App.vue'
import Observer from "./observer";

Vue.prototype.Observer = Observer;
new Vue({
  el: '#app',
  render: h => h(App)
})


/*
  keep-alive
    keep-alive是vue中的一个内置组件,keep-alive包裹的动态组件/组件 当组件在不活跃状态的时候会将组件缓存在
    缓存当中,而不是进行销毁，下一次进入活跃状态的时候，会从缓存中读取，而不是重新创建


    常用的属性
      1、include  
        类型：字符串或者正则表达式
        作用： 包含需要匹配的组件
      2、exclude
        类型：字符串或者正则表达式
        作用  排除不需要缓存的组件
      3、max
        类型：数字
        作用：最多缓存多少个组件


*/