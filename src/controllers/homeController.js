const getHomepage = (req, res) => {
	// process data
	// call model
	res.send("Hello, World!");
};

const getHelloEJS = (req, res) => {
	res.render("sample.ejs");
};

const getNamdang = (req, res) => {
	res.send("<h1>namdang here</h1>");
};

module.exports = { getHomepage, getHelloEJS, getNamdang };
