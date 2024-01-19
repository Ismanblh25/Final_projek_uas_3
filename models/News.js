// import database
const db = require("../config/database");

// make News model
class News {
    static all() {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM newss";
            db.query(sql, (sql, results) => {
                resolve(results);
            });
        });
    }

    /**
  * TODO 1: Buat fungsi untuk insert data.
  * Method menerima parameter data yang akan diinsert.
  * Method mengembalikan data news yang baru diinsert.
  */

    // promise 1
    static async create(News) {
        const id = await new Promise((resolve, reject) => {
            const sql = "INSERT INTO newss SET ?";
            db.query(sql, News, (err, results) => {
                resolve(results.insertId);
            });
        });


        // promise 2
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM newss WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }


    static find(id) {
        // lakukan promise, select by id
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM newss WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        // update data
        await new Promise((resolve, reject) => {
            // query untuk update data
            const sql = "UPDATE newss SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        // select data by id
        const news = await this.find(id);
        return news;
    }

    static async delete(id) {
        // query delete
        return new Promise((resolve, reject) => {
            // query sql
            const sql = "DELETE FROM newss WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

}


// export model
module.exports = News;