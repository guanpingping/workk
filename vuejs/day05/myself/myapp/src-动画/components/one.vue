<template>
	<div class="one">
		<transition name="fade">
			<mask-com v-show="flag" @clickitem="toflag"></mask-com>
		</transition>
		<div class="one-top">
			<span @click.stop="hasshow()"><img src="../img/caidan.png"/></span>
			<span>卖座电影</span>
		</div>
		<transition name="slide" >
			<oneone-com v-show='flag'></oneone-com>
		</transition>
	</div>
</template>

<script>
import oneone from "./oneone.vue";
import mask from "./mask.vue";
export default{
	components:{
		"mask-com":mask,
		"oneone-com":oneone,
	},
	data(){
		return{
			flag:false,
			flagstatus:"1"
		}
	},
	methods:{
		hasshow(){
			this.flag = !(this.flag);
		},
		toflag(){
			this.flag = false;	
		}
	}
}
</script>

<!--scoped实现当前组件样式的私有-->
<style>
	.one-top{
		background: pink;
		color:#FFF;
		height: 0.76rem;
		line-height: .76rem;
		font-size: 0.32rem;
		position: relative;
	}
	.one-top span{
		margin: 0 10px;
	}
	.one-top span img{
		width: .36rem;
		height: .36rem;
		display: inline-block;
	}
	
</style>