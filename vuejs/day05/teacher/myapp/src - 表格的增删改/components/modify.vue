<template>
    <div class="modify">
        <label>
            姓名: <input type="text" v-model="name">
        </label>
         <br/>
        <label>
            年龄: <input type="text" v-model="age">
        </label>
         <br/>
        <label>
            个性签名: <input type="text" v-model="sign">
        </label>
         <br/>
        <button @click="handleUpdate()">修改</button>
        <button @click="handleClear()">取消</button>
    </div>
</template>

<script>
    export default {
        created () {
            this.Observer.$on("handleModifyItem",(params)=>{
                    this.name = params.name;
                    this.age = params.age;
                    this.sign = params.sign;
            })
        },
        data(){
            return {
                name:"",
                age:"",
                sign:""
            }
        },
        methods:{
            handleUpdate(){
                var obj = {};
                obj.name = this.name;
                obj.age = this.age;
                obj.sign = this.sign;
                //修改数据
                this.Observer.$emit("handleUpdateItem",obj);
                //切换到Add组件
                 this.$emit("handleToggle",true);

                 //清空
                 this.handleClear();
            },
            handleClear(){
                this.name = "";
                this.age = "";
                this.sign = "";
            }
        }
    }
</script>

<style>
    .modify{
        border:5px solid cadetblue;
    }
</style>