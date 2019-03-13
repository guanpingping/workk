<template>
    <div class="home">
        <div class="header">
            <div class="title">
                <p>母婴商城</p>
            </div>
            <div class="userInfo">
                <p>{{username}}</p>
                <p @click="handleClear()">退出</p>
            </div>
        </div>
        <div class="main">
            <div class="tab">
                <el-row class="tac">
                    <el-col>
                        <el-menu
                        default-active="0"
                        class="el-menu-vertical-demo"
                        >
                        <router-link :to="{name:'homepage'}">
                            <el-menu-item index="1">
                                <i class="el-icon-location"></i>
                                <span slot="title">首页</span>
                            </el-menu-item>
                        </router-link>
                        
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-goods"></i>
                                <span>商品</span>
                            </template>
                            <router-link :to="{name:'goodlist'}">
                               <el-menu-item index="2-1">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">商品列表</span>
                                </el-menu-item> 
                            </router-link>
                            <router-link :to="{name:'addgoods'}">
                                <el-menu-item index="2-2">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">添加商品</span>
                                </el-menu-item>
                            </router-link>
                           <router-link :to="{name:'sortgoods'}">
                                <el-menu-item index="2-3">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">商品分类</span>
                                </el-menu-item>
                           </router-link>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-tickets"></i>
                                <span>订单</span>
                            </template>
                            <router-link :to="{name:'orderlist'}"> 
                                <el-menu-item index="3-1">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">订单列表</span>
                                </el-menu-item>
                            </router-link>
                            <router-link :to="{name:'orderset'}"> 
                                <el-menu-item index="3-2">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">订单设置</span>
                                </el-menu-item>
                            </router-link>
                            <router-link :to="{name:'editorder'}">
                                 <el-menu-item index="3-3">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title">退货申请处理</span>
                                </el-menu-item>
                            </router-link>
                        </el-submenu>
                        <router-link :to="{name:'idea'}">
                            <el-menu-item index="4">
                                <i class="el-icon-news"></i>
                                <span slot="title">营销</span>
                            </el-menu-item>
                        </router-link>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <div class="content" >
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import {getCookie,removeCookie} from "../../utils/cookie.js";
    export default{
        data(){
            return{
                username:""
            }
        },
        created(){
            this.username = getCookie("username");
        },
        methods:{
            //点击退出按钮的时候
            handleClear(){
                removeCookie("X-toKen");
                removeCookie("username");
                this.$router.push("/login");
            },
        }
    }
</script>
<style scoped lang="scss">
    .home{
        height: 100%;
        overflow: hidden;
        .header{
            width: 100%;
            height: 50px;
            background: #428bca;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color:#fff;
            .title{
                font-size: 18px;
            }
            .userInfo{
                font-size: 16px;
                width: 100px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
            }
        }
        .main{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            .tab{
                width: 15%;
                background: #ffffff;
                flex-shrink: 0;
            }
            .content{
                flex: 1;
            }
        }
        
    }
</style>