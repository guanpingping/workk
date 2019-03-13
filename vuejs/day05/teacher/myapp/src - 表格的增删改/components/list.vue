<template>
    <div class="list">
        <ul>
            <li 
            v-for="(item,index) in list" 
            @click="handleActive(index)" 
            :class="activeIndex == index?'active':''">
                <p>{{item.name}}</p>
                <p>{{item.age}}</p>
                <p>{{item.sign}}</p>
                <button @click="handleModify(index)">修改</button>
                <button @click="handleDel(index,$event)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        created(){
            this.Observer.$on("handleSend",(params)=>{
                this.list.push(params)
            })

            this.Observer.$on("handleUpdateItem",(params)=>{
                this.list.splice(this.modifyIndex,1,params);
            })
        },
        data(){
            return {
                list:[],
                modifyIndex:-1,
                activeIndex:-1,
                activeItme:{}
            }
        },
        methods:{
            handleModify(index){
                //切换到修改模块
                this.$emit("handleToggle",false);

                //记录需要修改的下标
                this.modifyIndex = index;

                //将需要修改的数据传递给modefiy
                let obj = this.list[index];
                this.Observer.$emit("handleModifyItem",obj);

            },
            handleDel(index,e){
                //阻止事件冒泡
                e.stopPropagation();
                
                //删除
                this.list.splice(index,1);
                //重新查看我选中的那个元素的下标
                let idx = this.list.indexOf(this.activeItme);
                //修改选中的下标
                this.activeIndex = idx;
            },
            handleActive(index){
                this.activeIndex = index;
                //记录选中的元素
                this.activeItme = this.list[index];
            }
        }
    }
</script>

<style>
    .active{
        background: #ccc;
    }
</style>