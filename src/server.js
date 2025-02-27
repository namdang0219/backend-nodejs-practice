require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express(); // Define app
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

app.use("/", webRoutes);
/**
 * first parameter is default path before 2nd parameter
 * used for api versioning
 */

// test connection
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

const sql = "SELECT * From Users";

connection.query(sql, (err, rows, fields) => {
	if (err instanceof Error) {
		console.log(err);
		return;
	}

	console.log(">>> rows", rows);
	console.log(">>> fields", fields);
});

app.listen(port, hostname, () => {
	console.log("listening on port " + port);
});
