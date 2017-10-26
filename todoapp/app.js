var express = require("express");
var app = express();


app.set("view engine","ejs"); //把ejs转化为html文件
app.use("/assets",express.static(__dirname+"/assets"));//存放静态文件
var todoController = require('./controller/todoController');
todoController(app); //调用方法
app.listen(3000);
