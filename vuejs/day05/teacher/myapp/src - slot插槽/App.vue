<template>
  <div id="app">
     <One-com>
       <p slot="name1">杜逢时</p>
       <p slot="name2">羊波</p>
       <p slot="name3">姚旭麟</p>

       <template scope="props">
          <h2>{{props.val}}</h2>
       </template>
     </One-com>
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
      
    }
  }
 
}







</script>

<style>

</style>
