import { Pool } from 'pg';

// .env returns string but ClientConfig.port from pg package requires number
// Below code segment changes PGPORT from string to number
let pgPort = undefined;
if (process.env.PGPORT) {
  pgPort = parseInt(process.env.PGPORT);
}

let config;
if (process.env.NODE_ENV === 'production') {
  config = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: pgPort,
    ssl: {
      rejectUnauthorized: false,
    },
  };
} else {
  config = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: pgPort,
  };
}

// Creates new pool instance for Postgres from .env
// Import this pool into all API routes that require a pool connection
const pool = new Pool(config);

export default pool;
