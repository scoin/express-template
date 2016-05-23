module.exports = {
	get: function(name){
		return name + this.services.numbers.add(20)
	},
	userNumber: function(){
		return 42;
	},
	address: function(){
		return this.services.addresses.getUserAddress()
	}
}