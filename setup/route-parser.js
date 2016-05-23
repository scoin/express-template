var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var globalsHandler = require(__dirname + "/../config/globals");

module.exports = function(routesObj, routeDir){
	console.log("INITIALIZING ROUTES")
	return registerRoutes(routesObj, routeDir, router)
}

var registerRoutes = function(obj, routeDir){
	for(var key in obj){
		if(typeof obj[key] === "string"){
			
			var routeHandler = findRouteHandler(key, routeDir);
			console.log(obj[key])
			var input = obj[key].split(" ");
			var method = input[0].toLowerCase();
			var path = input[1].toLowerCase();

			router[method](path, routeHandler.bind(globalsHandler.get()));

		} else if(typeof obj[key] === "object"){

			var subRouteDir = routeDir + "/" + key;
			router = registerRoutes(obj[key], subRouteDir, router);

		}
	}
	return router;
}

var findRouteHandler = function(key, routeDir){
	var fileNames = fs.readdirSync(routeDir);
	var routeHandler = null;
	for(var i in fileNames){
		stats = fs.statSync(routeDir + "/" + fileNames[i]);
		if (stats.isFile()){
			var routes = require(routeDir + "/" + fileNames[i]);
			if(key in routes){
				routeHandler = routes[key];
				break;
			}
		}
	}
	if(!routeHandler){
		throw "You have not defined a '" + key + "' function in any file in " + routeDir
	}
	return routeHandler;
}