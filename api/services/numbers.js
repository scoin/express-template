module.exports = {
	add: function(num){
		return this.services.user.userNumber() + num;
	}
}