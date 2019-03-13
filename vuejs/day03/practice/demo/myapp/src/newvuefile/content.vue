<template>
	<div id="content">
		<div id="con-side">
			<ul>
				<li 
					v-for="(item,index) in arr" 
					v-bind:class="sideindex==index?'sideactive':''"
					@click="sideClick(index)">
					<a href="#">{{item.tit}}</a>
				</li>
			</ul>
		</div>
		<div class="con-ri"
			v-for="(item,index) in arr" 
			v-show="sideindex==index"
			>
			<div 
				class="con-ri-top"
				>
				<img :src="'src/img/'+item.titimg" />
			</div>
			<div class="con-ri-bot">
				<div 
					class="con-ri-bot-box"
					v-for="( botarr , index ) in item.img"
					>
					<span><img :src="'src/img/'+botarr.conimg"/></span>	
					<span class="contxt">{{botarr.consort}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
	
<script>
	export default{
		data(){
			return{
				arr:[
						{
							"tit":"全部商品",
							"titimg":"con1.jpg",
							"img":[
										{
											"conimg":"con2.jpg",
											"consort":"七分/长衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"白衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"情侣衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"蝙蝠衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"卫衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"羽绒服"
										},
										{
											"conimg":"con2.jpg",
											"consort":"大长衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"薄衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"加长卫衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"加厚羽绒服"
										}
									]
						},
						{
							"tit":"上新爆款",
							"titimg":"con1.jpg",
							"img":[
										{
											"conimg":"con2.jpg",
											"consort":"七分/长衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"白衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"情侣衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"蝙蝠衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"卫衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"羽绒服"
										},
										{
											"conimg":"con2.jpg",
											"consort":"大长衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"薄衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"加长卫衣"
										}
									]
						},
						{
							"tit":"上装类",
							"titimg":"con1.jpg",
							"img":[
										{
											"conimg":"con2.jpg",
											"consort":"七分/长衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"白衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"情侣衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"蝙蝠衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"卫衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"羽绒服"
										},
										{
											"conimg":"con2.jpg",
											"consort":"大长衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"薄衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"加长卫衣"
										}
									]
						},
						{
							"tit":"衬衫类",
							"titimg":"con1.jpg",
							"img":[
										{
											"conimg":"con2.jpg",
											"consort":"七分/长衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"白衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"情侣衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"蝙蝠衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"卫衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"羽绒服"
										},
										{
											"conimg":"con2.jpg",
											"consort":"大长衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"薄衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"加长卫衣"
										}
									]
						},
						{
							"tit":"针织衫",
							"titimg":"con1.jpg",
							"img":[
										{
											"conimg":"con2.jpg",
											"consort":"七分/长衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"白衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"情侣衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"蝙蝠衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"卫衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"羽绒服"
										},
										{
											"conimg":"con2.jpg",
											"consort":"大长衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"薄衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"加长卫衣"
										}
									]
						},
						{
							"tit":"外套类",
							"titimg":"con1.jpg",
							"img":[
										{
											"conimg":"con2.jpg",
											"consort":"七分/长衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"白衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"情侣衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"蝙蝠衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"卫衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"羽绒服"
										},
										{
											"conimg":"con2.jpg",
											"consort":"大长衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"薄衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"加长卫衣"
										}
									]
						},
						{
							"tit":"裤和裙子",
							"titimg":"con1.jpg",
							"img":[
										{
											"conimg":"con2.jpg",
											"consort":"七分/长衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"白衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"情侣衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"蝙蝠衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"卫衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"羽绒服"
										},
										{
											"conimg":"con2.jpg",
											"consort":"大长衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"薄衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"加长卫衣"
										}
									]
						},
						{
							"tit":"家具和内着",
							"titimg":"con1.jpg",
							"img":[
										{
											"conimg":"con2.jpg",
											"consort":"七分/长衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"白衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"情侣衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"蝙蝠衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"卫衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"羽绒服"
										},
										{
											"conimg":"con2.jpg",
											"consort":"大长衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"薄衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"加长卫衣"
										}
									]
						},
						{
							"tit":"配件",
							"titimg":"con1.jpg",
							"img":[
										{
											"conimg":"con2.jpg",
											"consort":"七分/长衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"白衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"情侣衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"蝙蝠衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"卫衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"羽绒服"
										},
										{
											"conimg":"con2.jpg",
											"consort":"大长衣"
										},
										{
											"conimg":"con2.jpg",
											"consort":"薄衬衫"
										},
										{
											"conimg":"con2.jpg",
											"consort":"加长卫衣"
										}
									]
						}
					],
					sideindex:0
			}
		},
		methods:{
			sideClick(index){
				this.sideindex = index;
			}
		}
	}
</script>

<style>
	#content{
		display: flex;
		margin-bottom:0.98rem;;
	}
	#content #con-side{
		color: #747474;
		font-size: .26rem;
		line-height: .64rem;
	}
	#content #con-side>ul li:nth-of-type(2) a{
		border-bottom: 1px solid #f5f5f5;
	}
	#content #con-side>ul li{
		width: 2.04rem;
		height: .64rem;
		padding-left: .32rem;
		box-sizing: border-box;
		margin: 0.1rem 0;
	}
	#content #con-side>ul li a{
		display: block;
	}
	#content #con-side>ul .sideactive{
		padding-left: .28rem;
		border-left: 0.04rem solid #000000;
	}
	#content .con-ri{
		flex: 1;
	}
	#content .con-ri .con-ri-top{
		margin: .34rem auto;
		width: 88.6%;
		height: 1.92rem;
	}
	#content .con-ri .con-ri-top img{
		width: 100%;
		height: 100%;
	}
	#content .con-ri .con-ri-bot{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	#content .con-ri .con-ri-bot .con-ri-bot-box{
		width: 33.3%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: .38rem;
	}
	#content .con-ri .con-ri-bot span img{
		width: .96rem;
		height: .96rem;
	}
	#content .con-ri .con-ri-bot .contxt{
		line-height: .6rem;
		color: #5b5b5b;
		font-size: 0.2rem;
	}
</style>