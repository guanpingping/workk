
var userModel = require("../model/userModel");

var JWT = require("jsonwebtoken");

/* 业务逻辑的操作 */
var getLogin = (req,res,next)=>{
    let {username,password} = req.body;
    userModel.user({username},(data)=>{
        if(data.length==0){
            res.json({
                status:false,
                info:"用户名不存在"
            });
        }else{
            if(data[0].password==password){
                let payload = {
                   user:username
                };
                let secret = "abcde";//这是秘钥
                let token = JWT.sign(payload,secret,{expiresIn:"1h"});
                
                //前后端cookie可以混用
                res.cookie("X-toKen",token);
                res.cookie("username",username);
                
                res.json({
                    status:true,
                    info:"登录成功",
                    user:username
                })
            }else{
                res.json({
                    status:false,
                    info:"密码错误"
                })
            }
        }
    })
}

module.exports ={
    getLogin
} 