const connection = require("../config/database");

const getHomepage = (req, res) => {
	return res.render("home.ejs");
};

const getHelloEJS = (req, res) => {
	res.render("sample.ejs");
};

const getNamdang = (req, res) => {
	res.send("<h1>namdang here</h1>");
};

const postCreateUser = (req, res) => {
	let { email, name, city } = req.body;

	connection.query(
		`INSERT INTO Users (email, name, city)
	            VALUES (?, ?, ?);`,
		[email, name, city],
		(error, results) => {
			console.log(results);
			res.send("User created successfully");
		}
	);
};

module.exports = { getHomepage, getHelloEJS, getNamdang, postCreateUser };
