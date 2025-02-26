const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello, World!");
});

router.get("/hello-ejs", (req, res) => {
	res.render("sample.ejs");
});

router.get("/abc", (req, res) => {
	res.send(JSON.stringify({ name: "abc" }));
});

router.get("/namdang", (req, res) => {
	res.send("<h1>namdang here</h1>");
});

module.exports = router;
