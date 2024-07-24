const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sql, connectDB } = require('./db'); // Import the connectDB function and sql object

const app = express();
const port = 3000; // You can set this to any port you prefer

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle registration
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const query = `INSERT INTO users (first_name, last_name, email, password) VALUES (@firstName, @lastName, @Email, @Password)`;
    await sql.query(query, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });
    res.status(200).send('Registration successful');
  } catch (error) {
    console.error('Error inserting data:', error.message);
    res.status(500).send('Error inserting data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
