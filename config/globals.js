//put global libraries in here and they will be scoped to this in every route

module.exports = {
	async: require('async'),
	"_": require("lodash"),
	errors: require(__dirname + "/../api/responses/error")
}