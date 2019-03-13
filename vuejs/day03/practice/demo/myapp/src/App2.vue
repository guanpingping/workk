<template>
	<div id="app2">
		<headnew-com></headnew-com>
		<newmain-com></newmain-com>
	</div>
</template>

<script>
	import newhead from './news/newhead.vue';
	import newmain from './news/newmain.vue'
	export default{
		components:{
			"headnew-com":newhead,
			"newmain-com":newmain
		}
	}
</script>

<style>
</style>