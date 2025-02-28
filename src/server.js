const express = require("express");
const app = express();
const router = require("./router/api");

const hostname = "localhost";
const port = 3001;

const checkLogin = (req, res, next) => {
	if (login) {
		next();
	} else {
		res.status(401).json({ error: "Unauthorized" });
	}
};
const checkAdmin = (req, res, next) => {
	if (login) {
		if (req.user.role === "admin") next();
	} else {
		res.status(401).json({ error: "Unauthorized Admin" });
	}
};

app.get("/", (req, res, next) => {
	console.log("md1");
	next();
});

app.use("/admin/api/v1", checkAdmin, router);
app.use("/api/v1", checkLogin, router);

app.listen(port, () => {
	console.log(`Example app listening on port ${hostname}:${port}`);
});
