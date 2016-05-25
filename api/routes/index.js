module.exports = {
	info: function(req, res){
		this.dnb.serviceRequest("crud-service").post("/users/199")
		.then(function(data){
			return res.status(200).json(data)
		})
		.catch(function(err){
			return res.status(err.status).json(err)
		})
		
	},
	error: function(req, res){
		//errors is required in config/globals.js, and globals are scoped to this in all routes
		var err = this.errors.badRequest(new Error("Big Mistake"))
		res.status(err.statusCode).json(err)
	}
}
