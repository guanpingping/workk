<template>
  <div id="app">
    <keep-alive exclude="One-com">
       <component :is="comName"></component>
    </keep-alive>
   


    <!-- <One-com v-if="comName == 'One-com'"/>
    <Two-com v-if="comName == 'Two-com'"/> -->


    <button @click="handle(1)">one组件</button>
    <button @click="handle(2)">Two组件</button>
  </div>
</template>

<script>
import One from './components/one';
import Two from "./components/two";
export default {
  components:{
    "One-com":One,
    "Two-com":Two
  },
  data(){
    return {
      comName:"One-com"
    }
  },
  methods:{
    handle(n){
      switch(n){
        case 1:
          this.comName = "One-com";
          break;
        case 2:
          this.comName = "Two-com"
      }
    }
  }
 
}
</script>

<style>

</style>
