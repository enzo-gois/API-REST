module.exports = {
  test: {
    client: 'pg',
    version: '11',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '1527',
      database: 'barriga',
    },
    migrations: { directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  }
};