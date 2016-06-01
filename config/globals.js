var _ = require("lodash");
var nconf = require("nconf");

//put static global libraries in here and they will be scoped to this in every route. 
//If your globals require a value retrieved asynchronously, put them inside globalInit.js

var globals = {
	name: "crud-service",
	async: require('async'),
	"_": require("lodash"),
	dnb: require("dnb-common"),
	discovery: require("dnb-common").discovery.init(nconf.get('REDIS'))
}

module.exports = {
	set: function(obj){
		globals = _.merge(obj, globals);
		return globals;
	},
	get: function(){
		return globals;
	}
}