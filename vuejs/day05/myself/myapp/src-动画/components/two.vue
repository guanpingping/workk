<template>
	<div id="two">
		<ul>
			<li v-for="(item,index) in arr"
				:class="arrindex==index?'active':''"
				@click="hasclick(index)"
				>{{item}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data(){
		return{
			arr:["正在上映","即将上映"],
			arrindex:0
		}
	},
	methods:{
		hasclick(index){
			this.arrindex = index;
		}
	}
}
</script>

<style>
	#two{
		overflow: hidden;
	}
	#two ul{
		display: flex;
		padding:0  2%;
		border: 1px solid palegoldenrod;
	}
	#two li{
		width: 48%;
		font-size: 0.28rem;
		text-align: center;
		height: 0.56rem;
		line-height: 0.56rem;
	}
	#two .active{
		color:#F36161;
		border-bottom: 2px solid #F36161;
	}
</style>