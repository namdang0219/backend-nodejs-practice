const express = require("express");
const path = require("path");

const configViewEngine = (app) => {
	app.set("views", path.join('./src', "views"));
	app.set("view engine", "ejs");
	/**
	 * __dirname is path to current file folder location
	 * defaults to the views directory in the application root
	 */

	// static files
	app.use(express.static(path.join('./src', "public")));
};

module.exports = configViewEngine;
