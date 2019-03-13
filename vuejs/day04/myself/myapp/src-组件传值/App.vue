<template>
 <div id="app">
 	<h2>app</h2>
	 	<!--<div><i class="iconfont">&#xe663;</i></div>-->
	 	<p>子组件one传过来的值{{valone}}</p>
 		<p>子组件two传过来的值{{val}}</p>
	 	<one-com :val="city" @handleone="hasone"></one-com>
	 	<two-com :val="city" @handle="hastwo"></two-com>
 </div>
</template>

<script>
import One from "./components/one";
import Two from "./components/two";
export default {
  components:{
  	"one-com":One,
  	"two-com":Two
  },
  data(){
  	return{
  		city:"深圳",
  		val:"",
  		valone:""
  	}
  },
  methods:{
  	hastwo( val ){
  		this.val = val;
  	},
  	hasone( val ){
  		this.valone = val;
  	}
  }
}
</script>

<style>
#app{
	background: #f40;
	padding: 40px;
}
</style>
