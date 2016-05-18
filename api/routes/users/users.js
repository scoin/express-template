module.exports = {
	getById: function(req, res){
		res.status(200).json({
			id: req.params.id
		})
	}
}