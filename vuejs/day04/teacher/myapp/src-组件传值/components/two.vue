<template>
    <div id="two">
        <h2>two</h2>
        <h3>接受到one组件的值为:{{name}}</h3>
    </div>
</template>

<script>
export default {
    created () {
       this.Observer.$on("two",(val)=>{
           this.name = val;
       })
    },
    data(){
        return {
            name:""
        }
    }
}
</script>

<style lang="">
    #two{
        padding: 40px;
        background: green;
    }
</style>