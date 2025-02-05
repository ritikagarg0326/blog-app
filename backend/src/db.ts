import mysql from 'mysql2/promise';

const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'Veronica123@';
const dbName = process.env.DB_NAME || 'blog';

async function createConnection(retries = 5, delay = 5000) {
  while (retries > 0) {
    try {
      const connection = await mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPassword,
        database: dbName,
      });
      console.log('Connected to the database successfully!');
      return connection;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Database connection failed: ${error.message}. Retrying in ${delay / 1000} seconds...`);
      } else {
        console.error('Unknown error occurred while connecting to the database.');
      }
      retries -= 1;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error('Could not connect to the database after multiple attempts.');
}

// Initialize the database connection
export let db: mysql.Connection;
(async () => {
  db = await createConnection();
})();
