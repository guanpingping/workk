<template>
  <div id="app">
			<header-com></header-com>
			<nav-com></nav-com>
			<content-com></content-com>
			<footer-com></footer-com>
  </div>
</template>

<script>
	import header from "./newvuefile/header.vue";
	import nav from "./newvuefile/nav.vue";
	import footer from "./newvuefile/footer.vue";
	import content from "./newvuefile/content.vue";
	export default{
		components:{
			"header-com":header,
			"nav-com":nav,
			"content-com":content,
			"footer-com":footer
		}
	}
</script>

<style>

</style>
