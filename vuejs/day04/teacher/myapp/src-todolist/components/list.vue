<template>
    <ul>
        <li v-for="(item,index) in todoList">{{item}}
            <button @click="handleDel(index)">删除</button>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            todoList:[]
        }
    },
    created(){
        this.Observer.$on("handle",(val)=>{
            this.todoList.push(val);
        })
    },
    methods:{
        handleDel(index){
            this.todoList.splice(index,1)
        }
    }
}
</script>


<style lang="">
    
</style>