const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'bot.db'));

function initDatabase() {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        phone TEXT UNIQUE,
        name TEXT
    )`);
}

function addUser(phone, name) {
    return new Promise((resolve, reject) => {
        db.run(`INSERT OR REPLACE INTO users (phone, name) VALUES (?, ?)`, [phone, name], function(err) {
            if (err) reject(err);
            else resolve(this.lastID);
        });
    });
}

function getUser(phone) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM users WHERE phone = ?`, [phone], (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
}

module.exports = { initDatabase, addUser, getUser };
