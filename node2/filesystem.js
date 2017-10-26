var fs = require("fs");

//同步 读取&写入
// var readMe = fs.readFileSync('readMe.txt','utf8');
// console.log(readMe);
// fs.writeFileSync("writeMe.txt","hih321ihhi");
// console.log(123);

// //异步 读取 &写入
// fs.readFile("readMe.txt","utf8",function(err,data) {
// 	if(err) throw err;

// 	console.log(data);
// })
// console.log(123); //先打印123
// fs.writeFile("writeMe.txt","4654654654",function(err,data) {
// 	if(err) throw err;
// 	console.log(data);	
// })

//异步读取文件 并将读取的文件内容写入到writeMe中;
// fs.readFile("readMe.txt","utf8",function(err,data) {
// 	if(err) throw err;
// 	// console.log(data);
// 	fs.writeFile("writeMe.txt",data);
// })

//删除一个文件
// fs.unlink('writeMe.txt',function(err,data) {
// 	if(err) throw err;

// 	console.log(data);
// });
//创建文件夹
// fs.mkdir("stuff",function() {});
//删除文件夹
fs.rmdir("stuff",function() {});





//__filename //当前模块的绝对路径
 console.log(__filename)


