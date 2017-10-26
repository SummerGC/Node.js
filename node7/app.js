var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use("/assets",express.static('assets'));
app.get("/", (req,res) => {
	// res.sendFile(__dirname+"/views/index.ejs");
	res.render("index");

});
app.get("/contact", (req,res) => {
	// res.sendFile(__dirname+"views/contact.ejs");
	res.render("contact");
	
});
//路由参数
app.get("/blogs/:sbqid", (req,res) => {
	var sbqdata= [
		{title:"博客1",author:"Henry",body:"this is 1 blog"},
		{title:"博客2",author:"Henry",body:"this is 2 blog"},
		{title:"博客3",author:"Henry",body:"this is 3 blog"},
		{title:"博客4",author:"Henry",body:"this is 4 blog"},
	];
	res.render("blog",{id:req.params.sbqid,data:sbqdata});
	
});
app.listen(3000);