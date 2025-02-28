const express = require("express");
const router = express.Router();

const {
	getHomepage,
	postCreateUser,
	getCreatePage,
	getUpdatePage,
	postEditUser,
	getDeleteUser,
} = require("./../controllers/homeController");

// router.Method("/route", handlers)

router.get("/", getHomepage);
router.get("/create", getCreatePage);
router.get("/update/:userId", getUpdatePage);
router.get("/delete-user/:userId", getDeleteUser);

// method POST
router.post("/create-user", postCreateUser);
router.post("/edit-user", postEditUser);

module.exports = router;
