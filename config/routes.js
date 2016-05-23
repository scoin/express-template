module.exports = {
	//path starts at api/routes - so these two routes are in any file in the root
	info: "GET /info",
	error: "GET /error",
	
	//routes within an object resolves to a folder with that name - can nest objets / folders endlessly
	users: {
		getById: "GET /users/:id",
		getName: "GET /users/name/:name"
	}
}