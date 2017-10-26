var http = require("http");
//返回一个对象, 调用一个方法
var server = http.createServer(function(req,res) {
	console.log("客户端和服务器已经建立通讯"+req.url);
	//HTTP响应头,告诉客户端返回的是什么类型的文件
	res.writeHead(200,{"Content-type":"text/plain"});
	//在客户端页面打印出来
	res.end("hey nodejs");
});
//.lisen监听之后再执行上面回调函数
server.listen(6160,"127.0.0.1");
console.log("server is running......");




// var http = require("http");
// var server = hhtp.createServer(function(req,res) {
// 	console.log("客户端和服务器已经建立通讯"+req.url);
// 	res.writeHead(200,{"Content-type":"text/plain"});
// 	res.end("hey nodejs");
// });
// server.listen(6160,"127.0.0.1");
// console.log("server is running......")
