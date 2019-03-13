<template>
  <div id="app">
    <header-com></header-com>
    <banner-com></banner-com>
    <main-com></main-com>
    <footer-com></footer-com>
  </div>
</template>

<script>
  import header from "./home/header.vue";
  import banner from "./home/banner.vue";
  import main from "./home/main.vue";
  import footer from "./home/footer.vue";
  export default {
    components:{
      "header-com":header,
      "banner-com":banner,
      "main-com":main,
      "footer-com":footer
    }
  }
</script>

<style>
</style>
