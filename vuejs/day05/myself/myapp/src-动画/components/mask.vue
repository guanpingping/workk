<template>
	<div class="mask" @click="hasclick()">
		
	</div>
</template>
<script>
	export default{
		methods:{
			hasclick(){
				this.$emit("clickitem");
			}
		}
	}
</script>

<style>
	.mask{
		width: 100%;
		height: 100%;
		background: black;
		position: absolute;
		top: 0;
		left: 0;
		opacity: .8;
	}
	.fade-enter,.fade-leave-to{
		opacity:0;
	}
	.fade-enter-active,.fade-leave-active{
		transition: all 4s;
	}
</style>