<template>
	<div class="meng">
		<ul>
			<li>
				<span>首页</span>
				<span><img src="../img/dayuhao.png"/></span>
			</li>
			<li>
				<span>影院</span>
				<span><img src="../img/dayuhao.png"/></span>
			</li>
			<li>
				<span>影片</span>
				<span><img src="../img/dayuhao.png"/></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
	}
</script>

<style>
	.meng{
		width: 80%;
		position: absolute;
		top: .76rem;
		left: 0;
		height: 100%;
	}
	.meng ul{
		width: 100%;
		flex-wrap: wrap;
		padding: 0 10px;
		height: 100%;
		background: pink;
	}
	.slide-enter,.slide-leave-to{
		left:-80%;
	}
	.slide-enter-active,.slide-leave-active{
		transition: all 1s;
	}
	.meng ul li{
		justify-content:space-between;
		display: flex;
		align-items: center;
		width: 100%;
		font-size: .32rem;
		line-height: 1rem;
		height: 1rem;
		color: #000000;
	}
	.meng ul li img{
		width: .24rem ;
		height:.48rem;
	}
</style>