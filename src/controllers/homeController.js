const connection = require("../config/database");
const {
	getAllUsers,
	getUserById,
	updateUserById,
	createUser,
	deleteUserById,
} = require("../services/CRUDService");

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

const postCreateUser = async (req, res) => {
	let { email, name, city } = req.body;
	await createUser(email, name, city);
	res.redirect("/");
};

const postEditUser = async (req, res) => {
	let { email, name, city, id } = req.body;
	await updateUserById(email, name, city, id);
	res.redirect("/");
};

const getDeleteUser = async (req, res) => {
	const { userId } = req.params;
	await deleteUserById(userId);
	res.redirect("/");
};

module.exports = {
	getHomepage,
	getCreatePage,
	postCreateUser,
	getUpdatePage,
	postEditUser,
	createUser,
	getDeleteUser,
};
