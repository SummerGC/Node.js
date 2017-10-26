var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res) {
	// res.writeHead(200,{"Content-type":"text/html"});
	// res.writeHead(200,{"Content-type":"application/json"});
	res.writeHead(200,{"Content-type":"text/html"});

	//text/plain 纯文本
	//text/html 返回的是html
	//application/json: 返回的是json
	var myReadStream = fs.createReadStream(__dirname+"/index.html","utf8");
	// var myReadStream = fs.createReadStream(__dirname+"/users.json","utf8");

	myReadStream.pipe(res);
	// var users = {
	// 	name:"Henry",
	// 	age:30,
	// 	gender:"male"
	// }
	// res.end(JSON.stringify(users));
})
server.listen(3000,"127.0.0.1");
console.log("server is running.....");