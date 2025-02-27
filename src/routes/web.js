const express = require("express");
const router = express.Router();

const {
	getHomepage,
	getHelloEJS,
	getNamdang,
} = require("./../controllers/homeController");

// router.Method("/route", handlers)

router.get("/", getHomepage);

router.get("/hello-ejs", getHelloEJS);

router.get("/namdang", getNamdang);

module.exports = router;
