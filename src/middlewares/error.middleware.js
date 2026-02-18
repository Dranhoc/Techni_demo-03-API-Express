export const errorHandler = (err, req, res, next) => {
	console.log(err);
	res.status(500).send("   --🏴‍☠️ Une erreur s'est produite, veuillez 🏴‍☠️--");
};
