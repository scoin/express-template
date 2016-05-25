var path = require('path');
var fs = require('fs');
var serviceDir = path.normalize(__dirname + "/../api/services");
var serviceFiles = fs.readdirSync(serviceDir);
var globalsHandler = require(path.normalize(__dirname + "/../config/globals"));



function init(){
	var globals = globalsHandler.get();
	console.log("INITIALIZING SERVICES")
	var services = {}
	for(var i in serviceFiles){
		var service = serviceFiles[i].substr(0, serviceFiles[i].lastIndexOf('.'));
		var methods = require(serviceDir + "/" + service);
		services[service] = methods;
	}

	globals.services = {};
	for(var name in services){
		console.log(name)
		if(typeof services[name] === "function"){
			globals.services[name] = services[name].bind(globals)
		} else if(typeof services[name] === "object"){
			globals.services[name] = {}
			for(var func in services[name]){
				globals.services[name][func] = services[name][func].bind(globals);
			}
		}
	}

	globalsHandler.set({services: globals.services});

	return globals.services;
}

module.exports = init;