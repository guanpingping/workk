const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db1819', {useNewUrlParser: true},()=>{
    console.log("数据库连接成功");
});
module.exports = mongoose;