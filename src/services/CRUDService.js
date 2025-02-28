const connection = require("../config/database");

const getAllUsers = async () => {
	const [results] = await connection.query("SELECT * FROM Users");
	return results;
};

const getUserById = async (email, name, city) => {
	const [results, fields] = await connection.query(
		`INSERT INTO Users (email, name, city)
	            VALUES (?, ?, ?);`,
		[email, name, city]
	);
};

const createUser = async (email, name, city) => {
	const [results, fields] = await connection.query(
		`INSERT INTO Users (email, name, city)
                VALUES (?,?,?);`,
		[email, name, city]
	);
	return results.insertId;
};

const updateUserById = async (email, name, city, id) => {
	const [results, fields] = await connection.query(
		`UPDATE Users
		SET email = ?, name= ?, city = ?
		WHERE id = ?;`,
		[email, name, city, id]
	);
};

const deleteUserById = async (userId) => {
	await connection.query("DELETE FROM Users WHERE id =?", [userId]);
};

module.exports = {
	getAllUsers,
	getUserById,
	updateUserById,
	createUser,
	deleteUserById,
};
