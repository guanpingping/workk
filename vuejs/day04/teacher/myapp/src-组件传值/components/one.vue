<template>
    <div id="one">
        <h2>one</h2>
        <OneOne></OneOne>
        <h3>接受到父组件的值为:{{val}}</h3>
        <button @click="handleOneSend()">发送给父组件</button>
        <button @click="handleTwo()">发送给Two组件</button>
    </div>
</template>

<script>
import OneOne from "./oneone.vue";
export default {
    created () {
        console.log(this)  
    },
    components: {
        "OneOne":OneOne
    },
    //数组的接受方式
    //props:["val"],
    //对象的接受方式
    props:{
        val:String
    },
    data(){
        return {
            name:"张三"
        }
    },
    methods:{
        handleOneSend(){
           this.$emit("handleSend",this.name)
        },
        handleTwo(){
            this.Observer.$emit("two","郭镜明")
        }
    }

}
</script>

<style lang="">
    #one{
        padding: 40px;
        background: yellow;
    }
</style>


