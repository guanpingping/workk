<template>
	<div id="app">
		<one-com></one-com>
		<two-com></two-com>
	</div>
</template>

<script>
import one from "./components/one.vue";
import two from "./components/two.vue";
export default{
	components:{
		"one-com":one,
		"two-com":two
	}
}
</script>

<style>
*{
		margin: 0;
		padding: 0;
}
body,html{
	height: 100%;
	font-size: 100px;
	overflow: hidden;
}
#app{
	height: 100%;
}
</style>
