<template>
  <div id="app">
      <input type="text" v-model="inputVal">
      <button @click="handleAdd()">添加</button>
      <ul>
          <li v-for="(item,index) in todoList">{{item}}<button @click="handleDel(index)">删除</button></li>
      </ul>
  </div>
</template>

<script>
//需要导出一个小型的vue实例
 export default {
   data(){
     return {
       inputVal:"",
       todoList:[]
     }
   },
   methods:{
     handleAdd(){
       this.todoList.push(this.inputVal);
       this.inputVal = "";
     },
     handleDel(index){
       this.todoList.splice(index,1);
     }
   }
 }
   
</script>

<style>
</style>
