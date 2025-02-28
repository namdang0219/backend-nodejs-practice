const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
	const results = await getAllUsers();
	return res.render("home.ejs", { listUsers: results });
};

const getCreatePage = (req, res) => {
	return res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
	const userId = req.params.userId;
	const user = await getUserById(userId);
	return res.render("edit.ejs", { userEdit: user });
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

const postEditUser = async (req, res) => {
	let { email, name, city } = req.body;
	let userId = req.params.userId;

	const [results, fields] = await connection.query(
		`UPDATE Users
		SET email = ?, name= ?, city = ?
		WHERE id = ?;`,
		[email, name, city, userId]
	);
	res.send("Update user successfully");
};

module.exports = {
	getHomepage,
	getCreatePage,
	getHelloEJS,
	getNamdang,
	postCreateUser,
	getUpdatePage,
	postEditUser,
};
