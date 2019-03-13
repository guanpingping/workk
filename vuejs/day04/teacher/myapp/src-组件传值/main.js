import Vue from 'vue'
import App from './App.vue'
import oBserver from "./observer";
Vue.prototype.Observer = oBserver;




new Vue({
  el: '#app',
  render: h => h(App)
})


/*
  组件传值  组件通信的方式

  1、父->子
  2、子->父
  3、非父子组件



  父组件传递子组件
    当子组件在父组件中当做标签使用的时候，可以给子组件标签绑定一个属性 值为需要传递的值。
    在子组件中通过props进行接受

    props接受的方式有2种
      1、数组接受
      2、对象接受,key值是绑定的属性  val值是当前传递过来的值的类型

      区别：
        对象接受可以限制数据的类型，保证数据结构的安全性

      props是专门用来接受外部属性的

  
  子组件传递父组件
    当子组件在父组件中当做标签使用的时候，给子组件添加一个自定义事件,在子组件中通过this.$emit触发这个自定义事件，进行数据的传值
    自定义的事件函数不需要加() 否则接受不到传递过来的数据



  非父子组件传值
    方案一: 公共的Vue对象
        $on绑定事件         接收值
        $emit用来触发事件   可以用来传值 


        one组件 this.$on this.$emit

        $on("handle",function(val){
          console.log(val);//123
        })




        two组件   this.$on  this.$emit
        
        $emit("handle",123)
    
        给vue的原型对象身上添加一个vue的实例 让需要非父子组件通信的组件使用同一个$on 和 $emit
        传值的一方调用$emit  接收值的一方使用$on  使用$on的时候在created中进行使用


    
  
*/