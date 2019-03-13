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


    面试题
      解释一下什么叫做单向数据流？
        当组件给父组件给子组件传递数据的时候，子组件不能直接修改父组件的值，因为数据是单向流动的

        
    过滤器：filter
      过滤数据

      组件内部使用过滤器的时候需要在export defualt  中书写key filters

      filters是一个对象  key值是过滤器的名称  val值是过滤器实现的函数 函数中接收到的参数有需要过滤的数据以及
      管道接受到的一些其他参数

      过滤器如何使用  通过管道符进行使用   | 管道符的后面书写过滤器的名称

      

    
*/