var counter = function(arr) {
	return `数组中拥有${arr.length}个元素`;
}
// console.log(counter(['asd','s','f']));





var adder = function(a,b) {
	return`两个数的和为${a+b}`;
}
var pi = 3.14;
//只有使用module.exports之后其他文件才可以引用;
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//模块模式
module.exports = {
	counter:counter,
	adder:adder,
	pi:pi
};