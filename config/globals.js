var _ = require("lodash");

//put static global libraries in here and they will be scoped to this in every route. 
//If your globals require a value retrieved asynchronously, put them inside globalInit.js

var globals = {
	async: require('async'),
	"_": require("lodash"),
	name: "crud-service",
	dnb: require("dnb-common")
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