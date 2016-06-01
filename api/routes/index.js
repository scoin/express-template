module.exports = {
	info: function(req, res){
		var self = this;
		self.dnb.serviceRequest("crud-service").post("/users/199")
		.then(function(data){
			res.ok(data)
		})
		.catch(function(err){
			// console.log(err)
			res.serverError(err);
		})
		
	},
	error: function(req, res){
		//errors is required in config/globals.js, and globals are scoped to this in all routes
		res.badRequest(new Error("Big Mistake"))
	}
}
