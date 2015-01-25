var db = require("./../libs/db");
module.exports = function(app){
	

	app.get("/test", function(req, res){
		var collection = db.get("usercollection");
		collection.find({},{},function(err,data){
			if(!!err) console.log("数据查找异常："+err)
            res.render("test", {
            	title:"test",
            	result: data
            })
        });
	});

	app.post("/test", function(req, res){
		//console.log(req.body);
		var collection = db.get("usercollection");
		collection.insert({
			username: req.body.username,
			email: req.body.email
		}, function(err, data){
			var result_word = !!err ? "新增失败" : "新增成功";
			res.render("test-post",{
				title: "请求后结果页面",
				result: result_word
			});
		})
	});
}