<template>
    <div id="footer">
        <ul>
           <li 
            v-for="(item,index) in navs" 
            @click="handleToggle(index)"
            :class = "activeIndex == index?'active':''"
            >{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navs:["首页","列表","订单","我的"],
            activeIndex:0
        }
    },
    methods:{
        handleToggle(index){
            this.activeIndex = index;
            this.$emit("handle",index)
        }
    }
}
</script>


<style lang="">
#footer{
    width: 100%;
    height: .98rem;
    background: #000;
    position: fixed;
    left: 0;
    bottom: 0;
}

#footer>ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}
#footer>ul>li{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: .98rem;
    color: #fff;
    font-size: .24rem;
}
#footer>ul>.active{
    background: #c33;
}
</style>