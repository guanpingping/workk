<template>
  <div id="app">
      <Input-com/>
      <List-com/>
  </div>
</template>

<script>
  import Input from "./components/input.vue";
  import List from "./components/list.vue";

  export default {
    components:{
      "Input-com":Input,
      "List-com":List
    }
  }
</script>

<style>
  
</style>
