var mongo = require("mongodb")
	, monk = require("monk");
var config = require("./../../config/config.json");
module.exports = monk(config.db.host+":"+config.db.port+"/"+config.db.name);