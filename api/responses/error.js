function errorHandler(err, message){
	console.error(err);
	console.error(message);

	return {
		error: this.error,
		message: message || err.message,
		statusCode: this.statusCode
	}
}

module.exports = {
	badRequest: errorHandler.bind({statusCode: 400, error: "BAD REQUEST"}),
	unauthorized: errorHandler.bind({statusCode: 401, error: "UNAUTHORIZED"}),
	forbidden: errorHandler.bind({statusCode: 403, error: "FORBIDDEN"}),
	notFound: errorHandler.bind({statusCode: 404, error: "NOT FOUND"}),
	tooLarge: errorHandler.bind({statusCode: 413, error: "REQUEST ENTITY TOO LARGE"}),
	unsupportedMediaType: errorHandler.bind({statusCode: 415, error: "UNSUPPORTED MEDIA TYPE"}),
	serverError: errorHandler.bind({statusCode: 500, error: "SERVER ERROR"}),
}