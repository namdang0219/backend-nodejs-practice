const connection = require("../config/database");

const getHomepage = (req, res) => {
	// process data
	// call model
	let users = [];

	const sql = "SELECT * From Users";

	connection.query(sql, (err, rows, fields) => {
		if (err instanceof Error) {
			console.log(err);
			return;
		}
		users = rows;
		console.log(">>> rows", rows);
		console.log("🚀 ~ connection.query ~ users:", users);
		res.send(JSON.stringify(users));
	});
};

const getHelloEJS = (req, res) => {
	res.render("sample.ejs");
};

const getNamdang = (req, res) => {
	res.send("<h1>namdang here</h1>");
};

module.exports = { getHomepage, getHelloEJS, getNamdang };
