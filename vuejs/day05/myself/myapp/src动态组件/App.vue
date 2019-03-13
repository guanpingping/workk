<template>
	<div id="app">
		<component :is="comName"></component>
		<footer-com @handle="handclick"></footer-com>
	</div>
</template>

<script>
import head from "./components/header.vue";
import banner from "./components/banner.vue";
import my from "./components/my.vue";
import order from "./components/order.vue";
import foot from "./components/footer.vue";
export default{
	components:{
		"header-com":head,
		"banner-com":banner,
		"my-com":my,
		"order-com":order,
		"footer-com":foot
	},
	data(){
		return{
			comName : "header-com"
		}
	},
	methods:{
		handclick(val){
			console.log(val)
			switch(val){
				case 0:
					this.comName = "header-com";
					break;
				case 1:
					this.comName = "banner-com";
					break;
				case 2:
					this.comName = "my-com";
					break;
				case 3:
					this.comName = "order-com";
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
#app,.page{
	height: 100%;
}
</style>
