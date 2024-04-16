const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); // Hash密码
const app = express();
const PORT = 3001;
app.use(bodyParser.json());
// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'AppleGong@0118',
  database: 'find_rides',
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
  const sql = 'SELECT * FROM find_rides.rides';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(result);
  });
});


// POST endpoint to add a new ride
app.post('/rides', (req, res) => {
  const {pickUpLocation, dropOffLocation, date, pickUpTime, dropOffTime, duration, driverName, passengerNumber } = req.body;
  
  // SQL query to insert data into the rides table
  const sql = 'INSERT INTO rides (pickUpLocation, dropOffLocation, date, pickUpTime, dropOffTime, duration, driverName, passengerNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  // Execute the query
  db.query(sql, [pickUpLocation, dropOffLocation, date, pickUpTime, dropOffTime, duration, driverName, passengerNumber], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(201).json({ message: 'Ride added successfully', rideId: result.insertId, pickUpLocation, dropOffLocation, date, pickUpTime, dropOffTime, duration, driverName, passengerNumber });
  });
});

app.get('/filter', (req, res) => {
  let sql = 'SELECT * FROM rides';
  const params = [];

  const { pickUpLocation, dropOffLocation, date, pickUpTime, dropOffTime, duration, driverName, passengerNumber} = req.query;
  const conditions = [];

  // Add conditions based on provided query parameters
  if (pickUpLocation) {
    conditions.push('pickUpLocation = ?');
    params.push(pickUpLocation);
  }
  if (dropOffLocation) {
    conditions.push('dropOffLocation = ?');
    params.push(dropOffLocation);
  }
  if (date) {
    conditions.push('date = ?');
    params.push(date);
  }
  if (pickUpTime){
    conditions.push('pickUpTime = ?');
    params.push(pickUpTime);
  } 
  if (dropOffTime) {
    conditions.push('dropOffTime = ?');
    params.push(dropOffTime);
  } 
  if (duration) {
    conditions.push('duration = ?');
    params.push(duration);
  }
  if (driverName) {
    conditions.push('driverName = ?');
    params.push(driverName);
  } 
  if (passengerNumber) {
    conditions.push('passengerNumber >= ?');
    params.push(passengerNumber);
  }
  // If there are any conditions, append them to the SQL query
  if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ');
  }

  // Execute the query
  db.query(sql, params, (err, result) => {
      if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      res.json(result);
  });
});

app.put('/rides/:rideId', (req, res) => {
  const { rideId } = req.params;
  const { pickUpLocation, dropOffLocation, date, pickUpTime, dropOffTime, duration, driverName, passengerNumber } = req.body;
  
  // SQL query to update the ride. It's a good idea to check which fields are provided in the request and update only those.
  let sql = 'UPDATE rides SET ';
  const updates = [];
  const params = [];
  
  // Dynamically build the SQL query based on provided fields in the request body
  if (pickUpLocation !== undefined) {
      updates.push('pickUpLocation = ?');
      params.push(pickUpLocation);
  }
  if (dropOffLocation !== undefined) {
      updates.push('dropOffLocation = ?');
      params.push(dropOffLocation);
  }
  if (date !== undefined) {
      updates.push('date = ?');
      params.push(date);
  }
  if (pickUpTime !== undefined) {
      updates.push('pickUpTime = ?');
      params.push(pickUpTime);
  }
  if (dropOffTime !== undefined) {
      updates.push('dropOffTime = ?');
      params.push(dropOffTime);
  }
  if (duration !== undefined) {
      updates.push('duration = ?');
      params.push(duration);
  }
  if (driverName !== undefined) {
      updates.push('driverName = ?');
      params.push(driverName);
  }
  if (passengerNumber !== undefined) {
      updates.push('passengerNumber = ?');
      params.push(passengerNumber);
  }

  // If no fields were provided to update, return an error
  if (updates.length === 0) {
      return res.status(400).json({ error: 'No update fields provided' });
  }
  
  sql += updates.join(', ') + ' WHERE rideId = ?';
  params.push(rideId);
  
  // Execute the update query
  db.query(sql, params, (err, result) => {
      if (err) {
          console.error('Error executing update query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      if (result.affectedRows === 0) {
          // No rows were updated, which means the rideId does not exist
          res.status(404).json({ message: 'Ride not found' });
      } else {
          res.json({ message: 'Ride updated successfully' });
      }
  });
});

app.delete('/rides/:rideId', (req, res) => {
  const { rideId } = req.params; // Extracting rideId from the URL parameter

  // SQL query to delete the ride with the given rideId
  const sql = 'DELETE FROM rides WHERE rideId = ?';

  // Execute the delete query
  db.query(sql, [rideId], (err, result) => {
      if (err) {
          console.error('Error executing delete query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      if (result.affectedRows === 0) {
          // No rows were deleted, which means the rideId does not exist
          res.status(404).json({ message: 'Ride not found' });
      } else {
          res.json({ message: 'Ride deleted successfully' });
      }
  });
});


//历史行程抓取端点
app.get('/my-ride-history', (req, res) => {
  // Assuming you have user authentication in place and you can get the user's ID
  const userId = req.session.userId; // This should be set when the user logs in
  const sql = 'SELECT * FROM Rides WHERE userId = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching ride history:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});
//抓取用户储存的rides
app.get('/my-saved-rides', (req, res) => {
  const userId = req.session.userId;
  const sql = 'SELECT Rides.* FROM Rides JOIN UserSavedRides ON Rides.rideId = UserSavedRides.rideId WHERE UserSavedRides.userId = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching saved rides:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

//收藏一个ride
app.post('/my-saved-rides', (req, res) => {
  const userId = req.session.userId;
  const { rideId } = req.body; // Assuming the rideId is sent in the request body
  const sql = 'INSERT INTO UserSavedRides (userId, rideId) VALUES (?, ?)';
  db.query(sql, [userId, rideId], (err, result) => {
    if (err) {
      console.error('Error saving a new ride:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.status(201).send('Ride saved successfully');
  });
});

//取消收藏
app.delete('/my-saved-rides/:rideId', (req, res) => {
  const userId = req.session.userId;
  const { rideId } = req.params; // Assuming the rideId is sent in the URL parameters
  const sql = 'DELETE FROM UserSavedRides WHERE userId = ? AND rideId = ?';
  db.query(sql, [userId, rideId], (err, result) => {
    if (err) {
      console.error('Error deleting saved ride:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send('Ride removed successfully');
  });
});


//散列加密密码，安全存储
const hashPasswordMiddleware = (req, res, next) => {
  if (req.body.password) {
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password, salt);
  }
  next();
};

// 用户登录
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM Users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).send('Internal Server Error');
    }
    if (results.length === 0) {
      return res.status(401).send('No user found with that email');
    }
    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send('Password is not correct');
    }
    // Handle session/cookie creation here
    res.send('Login successful');
  });
});

// 注册界面，存储姓名，地区，密码，密码再通过中间件加密
app.post('/sign-up', hashPasswordMiddleware, (req, res) => {
  const { firstName, lastName, email, username, country, phone, password } = req.body;
  const newUser = { firstName, lastName, email, username, country, phone, password };
  db.query('INSERT INTO Users SET ?', newUser, (err, results) => {
    if (err) {
      console.error('Error adding new user:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(201).send('User created successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
