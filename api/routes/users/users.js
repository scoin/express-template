module.exports = {
	getById: function(req, res){
		res.status(200).json({
			id: req.params.id
		})
	},
	getName: function(req, res){
		var globals = this;
		res.status(200).json({
			name: globals.services.user.get(req.params.name),
			address: globals.services.user.address()
		})
	}
}