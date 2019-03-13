<template>
	<div id="one">
		
		<button @click="onetotwo()">从one发送到two</button>
		<p>父组件传过来的值：{{val}}</p>
		<p>two组件传过来的值：{{twoval}}</p>
		<button @click="hasoneclick()">从one传到父组件app</button>
		<oneone-com></oneone-com>
	</div>
</template>

<script>
	import Oneone from "./oneone.vue";
	export default{
		components:{
			"oneone-com":Oneone
		},
		props:{
			/*这种方式可以限制数据类型*/
			"val":String
		},
		data(){
			return{
				arr:[1,2,3,4,5],
				twoval:""
			}
		},
		created(){
			this.Observer.$on("twoone",(data)=>{
				this.twoval = data;
			})
		},
		methods:{
			hasoneclick(){
				this.$emit("handleone",this.arr)
			},
			onetotwo(){
				this.Observer.$emit("onetwo",this.arr)
			}
		}
	}
</script>

<style>
	#one{
		padding: 40px;
		background: yellow;
	}
</style>