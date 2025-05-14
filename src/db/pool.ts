import sql from 'mssql';

const username = Bun.env.MSSQL_USERNAME
const password = Bun.env.MSSQL_PASSWORD
const database = Bun.env.MSSQL_DATABASE
const host = Bun.env.MSSQL_HOST

if (!username || !password || !database || !host) {
  throw new Error('Missing MSSQL connection environment variables');
}

const pool = await sql.connect({
  user: username,
  password: password,
  database: database,
  server: host,
  options: {
    encrypt: true, // se usar Azure
    trustServerCertificate: true, // se local/teste
  },
});

export default pool;