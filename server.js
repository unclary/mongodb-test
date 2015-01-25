/**
 * 内置模块
 */
var express = require("express")
	bodyParser = require("body-parser");
/*
 * 自定义模块
 */
var config = require("./config/config.json")
	, routes = require("./routes");
/**
 * 自定义变量
 */
var app = express();
app.set("port", process.env.PORT || config.host.port);
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");
app.use(bodyParser());
routes(app);

app.listen(app.get("port"));
console.log("listen to "+app.get("port"));