<template>
	<div id="app">
		<keep-alive :max="1">
			<component :is="comName"></component>
		</keep-alive>
		<!--v-if是<component :is="comName"></component>的另一种写法-->
		<!--<one-com v-if="comName=='one-com'"></one-com>
		<two-com v-if="comName=='two-com'"></two-com>-->
		<button @click="handle(1)">one组件</button>
    	<button @click="handle(2)">Two组件</button>
	</div>
</template>

<script>
import one from "./components/one.vue";
import two from "./components/two.vue";
export default{
	components:{
		"one-com":one,
		"two-com":two
	},
	data(){
		return{
			comName : "one-com"
		}
	},
	methods:{
		handle(val){
			switch(val){
				case 1:
					this.comName = "one-com";
					break;
				case 2:
					this.comName = "two-com";
					break;
			}
		}
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
}
#app{
	height: 100%;
}
</style>
