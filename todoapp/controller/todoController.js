var bodyParser =require("body-parser");//解析静置流
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //调用一个方法生成一个对象
var data = [{item:"Dog"},{item:"east"},{item:"west"}];


module.exports = function(app) {
	// console.log(app);
	app.get('/todo',(req,res)=> {
		res.render("todos",{todos:data});
	});
	app.post('/todo',urlencodedParser,(req,res)=> {
		// console.log(req.body);
		data.push(req.body); //必须引入bodyParser
		res.json(data);
	});
	app.delete('/todo/:name',(req,res) => {
		console.log(req.params.name);
		//ES6 ==ES2015  array method(for..of  filter map)
		//fliter:过滤(不条件满足的干掉 满足的留下)
	 // 	data=data.filter(function(todo) {
		// 	var value = todo.item !== req.params.name;
		// 	console.log(value);
		// 	return value;
		// });
		for (var i = 0; i < data.length; i++) {
			if(data[i].item == req.params.name){
				data.splice(i,1);
			}
		}
		res.json(data);

	})
}