import Vue from "vue";
import Vuex from "vuex";

import {getCookie} from "../utils/cookie"

import axios from "../axios/request";


//使用这个插件
Vue.use(Vuex);

let state = {
    token:getCookie("X-toKen"),
    username:getCookie("username")
}

let mutations = {
    handleloginmut(state,params){
        if(params.status){
            state.token = getCookie("X-toKen");
            state.username = getCookie("username");
        }
    }
}
let actions = {
    handlelogin({commit},userInfo){
        axios({
            method:"post",
            url:"/api/login",
            data:userInfo
        }).then((data)=>{
            commit("handleloginmut",data)
        })
    }
}


const store = new Vuex.Store({
    mutations,
    actions,
    state,
})


//导出这个插件
export default store;