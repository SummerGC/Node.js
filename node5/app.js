var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res) {
	console.log(req.url);
	if(req.url !=="/favicon.ico") {
		// console.log(req.url);
		if(req.url== "/"||req.url=="/home"){
			res.writeHead(200,{"Content-type":"text/html"});
			// res.end("这是home主页");
			var myReadStream = fs.createReadStream(__dirname+"/home.html");
			myReadStream.pipe(res);

		}else if (req.url =="/about") {
			res.writeHead(200,{"Content-type":"text/html"});
			// res.end("这是about界面");
			var myReadStream = fs.createReadStream(__dirname+"/about.html");
			myReadStream.pipe(res);


		}else if (req.url =="/contact") {
			res.writeHead(200,{"Content-type":"text/html"});
			// res.end("这是练习我们界面");
			var myReadStream = fs.createReadStream(__dirname+"/contact.html");
			myReadStream.pipe(res);


		}else{
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("找不到你要的界面");}

		// res.writeHead(200,{"Content-type":"application/json"});
		//text/plain 纯文本
		//text/html 返回的是html
		//application/json: 返回的是json
		// var myReadStream = fs.createReadStream(__dirname+"/users.json","utf8");
		// myReadStream.pipe(res);
		}
})
server.listen(8080,"127.0.0.1");
console.log("server is running.....")