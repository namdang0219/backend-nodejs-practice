const connection = require("../config/database");

const getAllUsers = async () => {
	const [results] = await connection.query("SELECT * FROM Users");
	return results;
};

const getUserById = async (userId) => {
	const [results] = await connection.query(
		"SELECT * FROM Users WHERE id =?",
		[userId]
	);
	return results[0];
};

module.exports = { getAllUsers, getUserById };
