import mysql from 'mysql2/promise';

// Use the environment variable DB_HOST or fallback to 'localhost' if not set
const dbHost = process.env.DB_HOST || 'localhost';

export let db = mysql.createConnection({
  host: dbHost,  // Use the dynamic DB host (either 'db' or 'localhost')
  user: 'root',
  password: 'Veronica123@',
  database: 'blog',
});