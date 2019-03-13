<template>
	<div id="main">
		<ul>
			<li v-for="(item,index) in arr">
				<div class="img">
					<img :src="'src/img/'+item.img" />
				</div>
				<div class="txtcon">
					<span class="txtcontop">{{item.txt}}</span>
					<span class="price">{{item.price}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr:[
					{
						"img":'th1.jpg',
						"txt":"家居长衫休闲套装",
						"price":"￥89"
					},
					{
						"img":'th2.jpg',
						"txt":"家居长衫休闲套装",
						"price":"￥89"
					},
					{
						"img":'th3.jpg',
						"txt":"家居长衫休闲套装",
						"price":"￥89"
					},
					{
						"img":'th4.jpg',
						"txt":"家居长衫休闲套装",
						"price":"￥89"
					},
					{
						"img":'th5.jpg',
						"txt":"家居长衫休闲套装",
						"price":"￥89"
					},
					{
						"img":'th6.jpg',
						"txt":"家居长衫休闲套装",
						"price":"￥89"
					},
					{
						"img":'th7.jpg',
						"txt":"家居长衫休闲套装",
						"price":"￥89"
					},
					{
						"img":'th8.jpg',
						"txt":"家居长衫休闲套装",
						"price":"￥89"
					}
				]
			}
		}
	}
</script>

<style>
	#main{
		padding: .02rem .06rem 0;
	}
	#main ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	#main ul li{
		margin-top: .22rem;
	}
	#main ul li .img{
		width: 3.32rem;
		height: 4.4rem;
	}
	#main ul li .img img{
		width: 100%;
		height: 100%;
	}
	#main ul li .txtcon{
		margin-top: .18rem;
		font-size: .26rem;
		line-height: .48rem;
		display: flex;
		justify-content: space-between;
	}
	#main ul li .txtcon .txtcontop{
		width: 1.9rem;
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-indent: .1rem;
		color: #5a5a5a;
	}
	#main ul li .txtcon .price{
		color: #f36161;
	}
</style>