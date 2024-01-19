// import mysql
const mysql = require("mysql");

// import dotenv dan menjalankan method config
require("dotenv").config();

/**
 * Membuat koneksi database menggunakan method createConnection
 * Method menerima parameter object: host, user, password, database
 */
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

/**
 * Menghubungkan ke database menggunakan method connect
 * Menerima parameter callback
 */
db.connect((err) => {
  if (err) {
    console.log(`Koneksi error: ${err}`);
    return;
  } else {
    console.log("Koneksi berhasil");
    return;
  }
});

module.exports = db;
