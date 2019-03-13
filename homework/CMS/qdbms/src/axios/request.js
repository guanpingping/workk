import axios from "axios";
import qs from "qs";
import {getCookie} from "../utils/cookie"

//重新创建一个axios，改变其配置项
const server = axios.create({
    //baseURL设置公司的域名
    timeout:5000,
})


//响应拦截
server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err)
})

//请求拦截
server.interceptors.request.use((config)=>{
    //成功回调
    if(config.method=="post"){
        config.data = qs.stringify(config.data);
    }else if(config.method=="get"){
        config.params = {...config.params};
    }

    //设置请求头
    config.headers["Content-type"]="application/x-www-form-urlencoded";

    //每次请求的时候都需要携带token
    config.headers["X-Token"]=getCookie();

    return config;
},(err)=>{
    //失败回调

    return Promise.reject(err)
})


export default server;