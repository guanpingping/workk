<template>
	<div id="footer">
		<ul>
			<li v-for="(navitem,index) in navarr">
				<span class="img"><img :src="'src/img/'+navitem.img"/></span>
				<span class="txt">{{navitem.txt}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	//需要导出一个小型的vue实例
	export default{
		data(){
			return{
				navarr:[
					{
						"img":"nav1.jpg",
						"txt":"首页"
					},
					{
						"img":"nav2.jpg",
						"txt":"分类"
					},
					{
						"img":"nav3.jpg",
						"txt":"穿搭"
					},
					{
						"img":"nav4.jpg",
						"txt":"购物车"
					},
					{
						"img":"nav5.jpg",
						"txt":"个人"
					}
				]
			}
		}
	}
</script>

<style>
	#footer{
		width: 100%;
		background: #fafafa;
		position: fixed;
		bottom: 0;
	}
	#footer>ul{
		height: .98rem;
		display: flex;
		justify-content: space-around;
	}
	#footer>ul li{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	#footer>ul li .img{
		display: inline-block;
		width:.51rem;
		height: .51rem;
	}
	#footer>ul li img{
		display: inline-block;
		vertical-align: middle;
		width: 100%;
		height: 100%;
	}
	#footer>ul li .txt{
		margin-top: 0.05rem;
		color: #666;
		font-size: .18rem;
	}
</style>