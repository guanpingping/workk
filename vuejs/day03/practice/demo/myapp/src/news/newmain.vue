<template>
	<div class="newmain">
		<ul>
			<li v-for="(item,index) in arr">
				<div class="img">
					<img :src="'src/img/'+item.img" />
				</div>
				<div class="txt">
					<p class="tit">{{item.tit}}</p>
					<p class="txtcon">{{item.txt}}</p>
				</div>
				<div class="more">
					<img src="../img/dayuhao.png" />
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
						"img":"news1.jpg",
						"tit":"物流助手",
						"txt":"顺丰快递455583564895，请您留意包裹信息"
					},
					{
						"img":"news2.jpg",
						"tit":"优惠活动",
						"txt":"轻型羽绒，新体验"
					},
					{
						"img":"news3.jpg",
						"tit":"通知消息",
						"txt":"您的订单已经下单成功"
					},
					{
						"img":"news4.jpg",
						"tit":"在线留言",
						"txt":"您提交的问题我们将及时解决"
					}
				]
			}
		}
	}
</script>

<style>
	.newmain ul li{
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: .17rem;
		height: 1.84rem;
		background: url(../img/bgr.jpg) repeat-x 0 bottom;
	}
	.newmain ul li .img{
		width: 1.04rem;
		height: 1.04rem;
	}
	.newmain ul li .more{
		width: .18rem;
		height: .34rem;
	}
	.newmain ul li img{
		width: 100%;
		height: 100%;
	}
	.newmain ul li .txt .tit{
		font-size: .30rem;
		color: #1e1e1e;
		margin-bottom: .34rem;
	}
	.newmain ul li .txt .txtcon{
		font-size: .26rem;
		color: #5a5a5a;
		width: 4.80rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: .26rem;
	}
</style>