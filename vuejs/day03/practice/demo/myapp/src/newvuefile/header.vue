<template>
	<div id="header">
		<div class="head">
			<input type="text" placeholder="请输入关键字" id="txt"/>
			<span></span>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#header{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 0.76rem;
	}
	#header .head{
		position: relative;
		width: 92%;
	}
	#header #txt{
		height: 0.56rem;
		line-height: 0.56rem;
		width:100%;
		background: #f4f4f4;
		border: 0;
		font-size: 0.23rem;
		color: #999;
		text-indent: 0.71rem;
		border-radius: .09rem;
		outline:none;
	}
	#header span{
		width: .38rem;
		height: .38rem;
		display: inline-block;
		background: url(../img/search.jpg) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 0.09rem;
		left: 0.22rem;
	}
</style>