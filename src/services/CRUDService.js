const connection = require("../config/database");

const getAllUsers = async () => {
	const [results] = await connection.query("SELECT * FROM Users");
	return results;
};

module.exports = { getAllUsers };
