<template>
	<div id="nav">
		<ul>
			<li v-for="(item,index) in arr" :class="indexli==index?'active':''" @click="handleClick(index)"><a href="#">{{item}}</a></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				arr:["女装","男装","童装","婴幼儿","运动"],
				indexli:0
			}
		},
		methods:{
			handleClick( index ){
				this.indexli = index;
			}
		}
	}
</script>

<style>
	#nav{
		height: .62rem;
		border-bottom: 1px dashed #f5f5f5;
	}
	#nav>ul{
		list-style: none;
		margin-top: 0.06rem;
		display: flex;
		justify-content: space-around;
	}
	#nav>ul li{
		font-size: .26rem;
		line-height: .56rem;
		box-sizing: border-box;
	}
	#nav>ul li a{
		color:#1c1c1c;
	}
	#nav>ul .active{
		border-bottom: 0.04rem solid #1c1c1c;
	}
</style>