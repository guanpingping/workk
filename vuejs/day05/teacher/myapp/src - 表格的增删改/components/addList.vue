<template>
    <div class="add">
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
        <button @click="handleAdd()">添加</button>
        <button>取消</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name:"",
                age:"",
                sign:""
            }
        },
        methods: {
            handleAdd(){
                var obj = {};
                obj.name = this.name;
                obj.age = this.age;
                obj.sign = this.sign;

                this.Observer.$emit("handleSend",obj);

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
    .add{
        border:5px solid salmon;
    }
</style>