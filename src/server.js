require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express(); // Define app
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for urlencoded

app.use("/", webRoutes);
/**
 * first parameter is default path before 2nd parameter
 * used for api versioning
 */

app.listen(port, hostname, () => {
	console.log("listening on port " + port);
});
