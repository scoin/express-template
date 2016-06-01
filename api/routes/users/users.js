module.exports = {
	getById: function(req, res){
		res.ok({
			id: req.params.id
		})
	},
	getName: function(req, res){
		var globals = this;
		res.ok({
			name: globals.services.user.get(req.params.name),
			address: globals.services.user.address()
		})
	}
}