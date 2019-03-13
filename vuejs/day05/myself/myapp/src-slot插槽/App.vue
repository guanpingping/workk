<template>
	<div id="app">
		<one-com>
			<p slot="name1">周俊琪</p>
			<p slot="name2">张艺兴</p>
			<p slot="name3">安文凤</p>
			<p slot="name4">倔强</p>
			<template scope="props">
				{{props.val}}
			</template>
		</one-com>
		<two-com></two-com>
	</div>
</template>

<script>
	import one from './components/one.vue';
	import two from './components/two.vue';
	
	export default{
		components:{
			"one-com":one,
			"two-com":two
		}
	}
</script>

<style>
	#app{
		font-size: .64rem;
	}
</style>
