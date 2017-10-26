var http = require("http");
var fs = require("fs");
//创建读取文件流的对象
var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
// console.log(myReadStream);



var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt","utf8");
// myReadStream.on("data",function(chunk){
// 	// console.log("======================接受chunk");       //数据是一段一段的传过去的
// 	// console.log(chunk);
// 	myWriteStream.write(chunk);
// });
//管道
myReadStream.pipe(myWriteStream);

//创建服务器
var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/plain"});
	var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
	myReadStream.pipe(res);
});
server.listen(3000,"127.0.0.1");
console.log("server is running......");