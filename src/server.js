const express = require("express");
const path = require("path");

const app = express(); // Define app
const port = 8080;

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

// config template engine
app.set("views", path.join(__dirname, "views"));
/**
 * __dirname is path to current file folder location
 * defaults to the views directory in the application root
 */
app.set("view engine", "ejs");

app.get("/hello-ejs", (req, res) => {
	console.log(path.join(__dirname, "views1"));
	console.log(path.join(__dirname, "2"));
	res.render("sample.ejs");
});

app.get("/abc", (req, res) => {
	res.send(JSON.stringify({ name: "abc" }));
});

app.get("/namdang", (req, res) => {
	res.send("<h1>namdang here</h1>");
});

app.listen(port, () => {
	console.log("listening on port " + port);
});
