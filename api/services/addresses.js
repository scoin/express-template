module.exports = {
	getUserAddress: function(){
		var globals = this;
		var user = globals.services.user.get("test user");
		var number = globals.services.numbers.add(100)
		return user + number;
	}
}