const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World! from router");
});

/**
 * Always place prams routes at the end of file because with will be
 * conflict with main routes
 */
router.get("/:id", (req, res) => {
	res.json(`Hello World! from router ` + req.params.id);
});

module.exports = router;
