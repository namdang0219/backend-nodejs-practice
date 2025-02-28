const express = require("express");
const router = express.Router();

const {
	getHomepage,
	getHelloEJS,
	getNamdang,
	postCreateUser,
	getCreatePage,
    getUpdatePage,
    postEditUser
} = require("./../controllers/homeController");

// router.Method("/route", handlers)

router.get("/", getHomepage);
router.get("/create", getCreatePage);
router.get("/update/:userId", getUpdatePage);

router.get("/hello-ejs", getHelloEJS);
router.get("/namdang", getNamdang);

// method POST
router.post("/create-user", postCreateUser);
router.post("/edit-user/:userId", postEditUser);


module.exports = router;
