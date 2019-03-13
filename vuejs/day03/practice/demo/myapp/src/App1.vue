<template>
	<div id="app1">
		<header-com></header-com>
		<headnav-com></headnav-com>
		<main-com></main-com>
	</div>
</template>

<script>
	import header from './favourable/header.vue';
	import headnav from './favourable/headnav.vue';
	import main from './favourable/main.vue'
	export default{
		components:{
			"header-com":header,
			"headnav-com":headnav,
			"main-com":main
		}
	}
</script>

<style>
</style>