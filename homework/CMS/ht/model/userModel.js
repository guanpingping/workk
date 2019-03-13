/* 数据库的操作 */

var mongoose = require("../util/db")
var userModel = mongoose.model('user', { username: String,password:String },'user')





//实现login 判断用户名和密码是否正确

var user = (userInfo,callback)=>{
    userModel.find(userInfo).then((data)=>{//异步
        callback(data);
   }); 
}


module.exports = {
    user
}