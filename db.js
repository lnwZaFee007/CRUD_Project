// db.js
const { Pool } = require('pg');

// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล PostgreSQL
const pool = new Pool({
user: 'yourusername',
host: 'localhost',
database: 'my_database',
password: 'yourpassword',
port: 5432,
});

module.exports = pool;