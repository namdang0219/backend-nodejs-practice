const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express(); // Define app
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

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

// static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/hello-ejs", (req, res) => {
	res.render("sample.ejs");
});

app.get("/abc", (req, res) => {
	res.send(JSON.stringify({ name: "abc" }));
});

app.get("/namdang", (req, res) => {
	res.send("<h1>namdang here</h1>");
});

app.listen(port, hostname, () => {
	console.log("listening on port " + port);
});
