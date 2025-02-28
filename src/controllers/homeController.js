const connection = require("../config/database");

const getHomepage = (req, res) => {
    return res.render('home.ejs')
};

const getHelloEJS = (req, res) => {
	res.render("sample.ejs");
};

const getNamdang = (req, res) => {
	res.send("<h1>namdang here</h1>");
};

module.exports = { getHomepage, getHelloEJS, getNamdang };
