<template>
    <div>
       <h2>one</h2>
       <h3>接受到父组件的值为:{{val}}</h3>
       <button @click="handleUpdate()">修改</button>
    </div>
</template>

<script>
export default {
   props:{
       city:String
   },
   data(){
       return {
           val:this.city
       }
   },
   watch:{
       city(newVal){
           this.val = newVal;
       }
   },
   methods:{
       handleUpdate(){
           this.val = "东莞";
       }
   }

}
</script>


<style lang="">
    
</style>