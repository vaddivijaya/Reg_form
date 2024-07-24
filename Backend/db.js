const sql = require('mssql');
require('dotenv').config();

// Print environment variables to ensure they are set correctly
console.log('DB_SERVER:', process.env.DB_SERVER);
console.log('DB_DATABASE:', process.env.DB_DATABASE);

const config = {
  server: process.env.DB_SERVER, // Ensure this is a string
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true
  },
  authentication: {
    type: 'ntlm'
  }
};

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    console.error('Full error stack:', error.stack);
    process.exit(1);
  }
};

module.exports = { sql, connectDB };
