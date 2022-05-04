import { Pool } from 'pg';
import { DB } from '../config';

/**
 * Creates new pool instance for Postgres from .env
 */
const pool = new Pool({
  user: DB.PGUSER,
  host: DB.PGHOST,
  database: DB.PGDATABASE,
  password: DB.PGPASSWORD,
  port: DB.PGPORT,
});

export default pool;
