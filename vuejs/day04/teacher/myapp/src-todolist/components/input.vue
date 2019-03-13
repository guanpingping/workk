<template>
    <div>
        <input type="text" v-model="InputVal">
        <button @click="handleAdd()">添加</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            InputVal:""
        }
    },
    methods:{
        handleAdd(){
            this.Observer.$emit("handle",this.InputVal);
            this.InputVal = "";
        }
    }
}
</script>


<style>
    
</style>