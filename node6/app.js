var express = require("express"); //express是一个方法
var app = express(); //app是一个对象

//有多少个page就写多少个app.get
app.get("/",(req,res) => {
	console.log(req);
	res.send("this is Home page"); //返回一个值

})
app.get('/contact',(req,res) => {
	res.send("this is contact page");
})

//路由参数
app.get('/blogs/:sbqid',(req,res) =>{
	console.log(req);
	res.send("具体的路由参数为:"+req.params.sbqid);
})
app.listen(3000);