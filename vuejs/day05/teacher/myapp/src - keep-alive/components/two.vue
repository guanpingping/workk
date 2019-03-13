<template>
    <div>
        <h2>Two</h2>
        <input type="text">
    </div>
</template>

<script>
export default {
    beforeCreate () {
        console.log("beforeCreate-----two")
    },
    created () {
        console.log("created-----two")
    },
    beforeMount() {
        console.log("beforeMount-----two")
    },
    mounted() {
        console.log("mounted-----two")
    },
    beforeUpdate() {
         console.log("beforeUpdate-----two")
    },
    updated() {
         console.log("updated-----two")
    },
    beforeDestroy () {
         console.log("beforeDestroy-----two")
    },
    destroyed () {
        console.log("destroyed-----two")
    }

}
</script>


<style lang="">
    
</style>