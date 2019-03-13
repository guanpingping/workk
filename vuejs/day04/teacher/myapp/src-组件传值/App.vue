<template>
  <div id="app">
      <h2>app</h2>
      <h3>接受到子组件的值为:{{name}}</h3>
      <one-com :val="city" @handleSend="handle"></one-com>
      <two-com></two-com>
  </div>
</template>

<script>
import One from "./components/one";
import Two from "./components/two";
export default {
  components:{
    "one-com":One,
    "two-com":Two
  },
  data(){
    return {
      city:"深圳",
      name:""
    }
  },
  methods:{
    handle(val){
      this.name = val;
    }
  }
}
</script>

<style>
  #app{
    padding: 40px;
    background: red;
  }
</style>
