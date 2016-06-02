var analytics = require('dnb-common').analytics;
var nconf = require("nconf");

function errorHandler(req, res, err, message){
	console.error(err);
	console.error(message);
	var data = {
		error: this.error,
		message: message || err.message,
		statusCode: this.statusCode
	};
	res.status(this.statusCode).json(data);
	if(nconf.get("LOG_REQUESTS")){
		analytics.log(req, data);
	}
}

function successHandler(req, res, data){
	var resp = {};
	if(typeof data === "object" && !(data instanceof Array)){
		resp = data;
	}
	else if(data instanceof Array){
		resp.data = data;
		resp.count = data.length;
	} else {
		resp.data = data;
	}
	res.status(this.statusCode).json(resp);
	if(nconf.get("LOG_REQUESTS")){
		analytics.log(req, resp);
	}
}

var responses = {
	ok: successHandler.bind({statusCode: 200}),
	created: successHandler.bind({statusCode: 201}),
	accepted: successHandler.bind({statusCode: 202}),
	badRequest: errorHandler.bind({statusCode: 400, error: "BAD REQUEST"}),
	unauthorized: errorHandler.bind({statusCode: 401, error: "UNAUTHORIZED"}),
	forbidden: errorHandler.bind({statusCode: 403, error: "FORBIDDEN"}),
	notFound: errorHandler.bind({statusCode: 404, error: "NOT FOUND"}),
	tooLarge: errorHandler.bind({statusCode: 413, error: "REQUEST ENTITY TOO LARGE"}),
	unsupportedMediaType: errorHandler.bind({statusCode: 415, error: "UNSUPPORTED MEDIA TYPE"}),
	serverError: errorHandler.bind({statusCode: 500, error: "SERVER ERROR"}),
}

module.exports = function(req, res){
	for(var resp in responses){
		res[resp] = responses[resp].bind(null, req, res);
	}
}