<template>
	<div class="one">
		one
		<input type="text" />
	</div>
</template>

<script>
export default {
    beforeCreate () {
        console.log("beforeCreate-----one")
    },
    created () {
        console.log("created-----one")
    },
    beforeMount() {
        console.log("beforeMount-----one")
    },
    mounted() {
        console.log("mounted-----one")
    },
    beforeUpdate() {
         console.log("beforeUpdate-----one")
    },
    updated() {
         console.log("updated-----one")
    },
    beforeDestroy () {
         console.log("beforeDestroy-----one")
    },
    destroyed () {
        console.log("destroyed-----one")
    }

}
</script>

<!--scoped实现当前组件样式的私有-->
<style scoped>
	.one{
		background: teal;
	}
</style>