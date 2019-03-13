<template>
	<div class="one">
		<slot name="name1"></slot>
		<slot name="name3"></slot>
		one
		<slot name="name2"></slot>
		<slot name="name4"></slot>
		<slot :val="city"></slot>
	</div>
</template>

<script>
export default{
	data(){
		return{
			city:"郑州"
		}
	}
}
</script>

<style>
</style>