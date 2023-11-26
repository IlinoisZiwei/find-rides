const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3001;

// Create a MySQL connection
const db = mysql.createConnection({
  host: '34.122.38.215',
  user: 'root',
  password: '20231126',
  database: 'Find_Rides_DB',
  connectTimeout: 60000,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
  // db.end((err) => {
  //   if (err) {
  //     console.error('Error closing MySQL connection:', err);
  //   } else {
  //     console.log('MySQL connection closed');
  //   }
  // });
});

// Define an API endpoint to fetch data from the database
app.get('/rides', (req, res) => {
  const sql = 'SELECT * FROM Rides';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
