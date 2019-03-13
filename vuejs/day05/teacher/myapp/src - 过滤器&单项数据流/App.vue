<template>
  <div id="app">
      <One-com :city="message"/>
      <button @click="handleCity()">改变城市</button>
      <h3>父组件中的城市为:{{message}}</h3>

      <p>单价:{{goods | sign}}</p>
      <hr>
      <p>{{message | name}}</p>
  </div>
</template>

<script>
import One from "./components/one";
export default {
  components:{
    "One-com":One
  },
  data(){
    return {
       message:"深圳",
       price:33,
       goods:'{"price":33,"num":3}'
    }
  },
  methods:{
    handleCity(){
      this.message = "北京"
    }
  },
  filters:{
    sign:function(val){
        return JSON.parse(val).price
    },
    name(val){
      return val.split("").reverse().join("");
    }
  }
 
}




</script>

<style>

</style>
