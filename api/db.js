require('dotenv').config()
const mysql = require('mysql2');

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "blog"
})