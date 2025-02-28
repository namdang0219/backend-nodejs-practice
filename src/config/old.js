const mysql = require("mysql2");
require("dotenv").config();

/**
 * デメリット
 * 新しい接続を連続的に作成
 * 接続が閉じない
 * サーバーの制限に達したらサーバーが落ちる
 * => 効率的に動かん => connection pool
 */

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

module.exports = connection;
