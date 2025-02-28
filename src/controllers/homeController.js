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
    console.log(req.body)
	res.send("<h1>create user</h1>");
};

module.exports = { getHomepage, getHelloEJS, getNamdang, postCreateUser };
