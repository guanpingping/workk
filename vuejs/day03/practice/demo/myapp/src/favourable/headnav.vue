<template>
	<div id="headnav">
		<ul class="one">
			<li 
				v-for="(item,index) in arr"
				v-bind:class="arrindex==index?'activeli':''"
				v-on:click="hasClickind(index)"
				>
				<a href="#" 
					v-bind:class="arrindex==index?'activea':''"
					>
					<span>{{item.txtt}}</span>
					<span>{{item.txtb}}</span>
				</a>
			</li>
		</ul>
		<ul class="two">
			<li 
				v-for="(item,index) in arrtwo"
				:class="arrtwoindex==index?'activetwo':''"
				@click="hasclicktwo(index)"
				>
				{{item.tit}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				arr:[
					{
					"txtt":"限时特惠",
					"txtb":"任选85折"
					},
					{
					"txtt":"双11登场",
					"txtb":"立减￥20"
					},
					{
					"txtt":"欢乐双11",
					"txtb":"立减￥30"
					},
					{
					"txtt":"羽绒特惠",
					"txtb":"85折起"
					},
				],
				arrtwo:[
					{"tit":"女装"},
					{"tit":"男装"},
					{"tit":"童装"},
					{"tit":"婴幼儿"}
				],
				arrindex:0,
				arrtwoindex:0
			}
		},
		methods:{
			hasClickind(index){
				this.arrindex = index;
			},
			hasclicktwo(index){
				this.arrtwoindex = index;
			}
		}
	}
</script>

<style>
	#headnav{
		background: #f4f4f4;
		height: 1.76rem;
		font-size: .26rem;
	}
	#headnav .one{
		display: flex;
		justify-content: space-around;
	}
	#headnav .one li{
		width: 25%;
		line-height: .44rem;
		padding-top: .14rem;
		padding-bottom: .1rem;
	}
	#headnav .one li a{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: .58rem;
		color: #5a5a5a;
		border-right: 0.02rem solid #999999;
	}
	#headnav .one .activeli{
		background: #384355;
		position: relative;
	}
	#headnav .one .activeli:after{
		content: "";
		width: 0;
		height: 0;
		border: 0.18rem solid #384355;
		border-left-color: transparent;
		border-right-color: transparent;
		border-bottom:0;
		position: absolute;
		bottom: -0.18rem;
		left: 40%;
	}
	#headnav .one .activea{
		height: auto;
		border-right:0;
		color: #fff;
	}
	#headnav .two{
		color:#5a5a5a;
	}
	#headnav .two li:nth-of-type(1){
		margin-left: .13rem;
	}
	#headnav .two li{
		float: left;
		line-height: .64rem;
		padding: 0 .3rem;
	}
	#headnav .two .activetwo{
		color: #384355;
	}
</style>