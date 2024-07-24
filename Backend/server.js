// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'vijayavaddi', // Your MySQL username
  password: 'vijji', // Your MySQL password
  database: 'registration_db'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle registration
app.post('/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const query = `INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
  connection.query(query, [firstName, lastName, email, password], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    res.status(200).send('Registration successful');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
