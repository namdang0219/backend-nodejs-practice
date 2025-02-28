const connection = require("../config/database");
const  { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
	const results = await getAllUsers();
	return res.render("home.ejs", { listUsers: results });
};

const getCreatePage = (req, res) => {
	return res.render("create.ejs");
};

const getHelloEJS = (req, res) => {
	res.render("sample.ejs");
};

const getNamdang = (req, res) => {
	res.send("<h1>namdang here</h1>");
};

const postCreateUser = async (req, res) => {
	let { email, name, city } = req.body;

	const [results, fields] = await connection.query(
		`INSERT INTO Users (email, name, city)
	            VALUES (?, ?, ?);`,
		[email, name, city]
	);
	res.send("Create user successfully");
};

module.exports = {
	getHomepage,
	getCreatePage,
	getHelloEJS,
	getNamdang,
	postCreateUser,
};
