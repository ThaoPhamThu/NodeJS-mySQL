import mysql from 'mysql2';

// create the connection to database
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejs'
});

export default connection;