const express = require("express");
const app = express();
const router = require("./router/api");

const hostname = "localhost";
const port = 3001;

app.use("/admin/api/v1", router);
app.use("/api/v1", router);

app.listen(port, () => {
	console.log(`Example app listening on port ${hostname}:${port}`);
});
