import { Pool } from 'pg';

// .env returns string but ClientConfig.port from pg package requires number
// Below code segment changes PGPORT from string to number
let pgPort = undefined;
if (process.env.PG_PORT) {
  pgPort = parseInt(process.env.PG_PORT);
}

let config;
if (process.env.NODE_ENV === 'production') {
  config = {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: pgPort,
    ssl: {
      rejectUnauthorized: true,
      ca: process.env.CA_CERT,
    },
  };
} else {
  config = {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: pgPort,
  };
}

// Creates new pool instance for Postgres from .env
// Import this pool into all API routes that require a pool connection
const pool = new Pool(config);

export default pool;
