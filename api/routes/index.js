module.exports = {
	info: function(req, res){
		return res.status(200).json()
	},
	error: function(req, res){
		//errors is required in config/globals.js, and globals are scoped to this in all routes
		var err = this.errors.badRequest(new Error("Big Mistake"))
		res.status(err.statusCode).json(err)
	}
}
