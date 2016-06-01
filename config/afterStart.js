//any operations for after server start go here

module.exports = function(address, port){
	this.discovery.announce(this.name, {
		protocol: "http",
		host: address.address,
		port: address.port,
		url: address.address + ":" + address.port
	})
}