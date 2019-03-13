<template>
	<div id="two">
		<p>one组件传过来的值：{{oneval}}</p>
		<p>父组件传过来的值：{{val}}</p>
		<button @click="hastwoclick()">从two发送到父组件</button>
		<button @click="twotoone()">从two发送到one</button>
	</div>
</template>

<script>
	export default{
		props:["val"],
		data(){
			return{
				"name":"张三李四",
				"oneval":"",
				"age":18
			}
		},
		created(){
			this.Observer.$on("onetwo",(val)=>{
				console.log(val)
				this.oneval = val;
			})
		},
		methods:{
			hastwoclick(){
				this.$emit("handle",this.name)
			},
			twotoone(){
				console.log(this);
				this.Observer.$emit("twoone",this.age);
			}
		}
	}
</script>

<style>
	#two{
		padding: 40px;
		background: green;
	}
</style>