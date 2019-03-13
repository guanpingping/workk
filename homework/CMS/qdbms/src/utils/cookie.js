import JSCookie from "js-cookie";

const ToKenKey = "X-Token";


//设置Cookie
export const setCookie = (ToKenKey="X-Token")=>{
    //如果说客户端种cookie的时候需要用到setCookie
    // JSCookie.set(ToKenKey,store.state.ToKen);
}

//获取cookie
export const getCookie = (ToKenKey="X-Token")=>{
    return JSCookie.get(ToKenKey);
}

//删除cookie
export const removeCookie = (ToKenKey="X-Token")=>{
    JSCookie.remove(ToKenKey);
}