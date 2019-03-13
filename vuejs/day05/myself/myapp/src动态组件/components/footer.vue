<template>
	<div class="footer">
		<ul>
			<li 
				v-for="( item , index ) in arr"
				:class="arrindex==index?'active':''"
				@click="hasclick(index)"
				>{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr:["首页","广告","我的","订单"],
				arrindex:0
			}
		},
		methods:{
			hasclick(index){
				this.arrindex = index;
				this.$emit("handle",index);
			}
		}
	}
</script>

<style>
	ul{
		width: 100%;
		background: #ccc;
		display: flex;
		justify-content: space-around;
		height: 98px;
		position: fixed;
		bottom: 0;
		font-size:42px;
		list-style: none;
		line-height: 98px;
	}
	ul li{
		width: 25%;
		text-align: center;
	}
	.active{
		background: #FF4400;
	}
</style>