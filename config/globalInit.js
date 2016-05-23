//initialize any globals that require an asynchronous callback here

module.exports = function(next){
	setTimeout(function(){
		next({
			globalsSet: true
		});
	}, 1000)
}