require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'advyise_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Setup database if it doesn't exist
async function initDB() {
  try {
    const connection = await pool.getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database initialized');
    connection.release();
  } catch (err) {
    console.error('Database initialization failed (is MySQL running?):', err.message);
  }
}

initDB();

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO enquiries (name, email, phone, message) VALUES (?, ?, ?, ?)',
      [name, email, phone || null, message]
    );
    res.status(201).json({ success: true, id: result.insertId });
  } catch (err) {
    console.error('Error saving enquiry:', err);
    res.status(500).json({ error: 'Server error saving enquiry' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
