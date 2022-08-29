import { Pool } from 'pg';

const config = {
  connectionString: process.env.DB_CONNECTION_STRING,
};

// Creates new pool instance for Postgres from .env
// Import this pool into all API routes that require a pool connection
const pool = new Pool(config);

export default pool;
