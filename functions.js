//在nodejs中经常使用函数表达式.
function sayHi1() {
	console.log('Hi');
}
// sayHi1();

//匿名函数(函数表达式) 比有名函数运行的块
var sayHi2 = function() {
	console.log('Hi,nihao');
}

function callFunction(foo) {
	foo();
}
callFunction(sayHi2);