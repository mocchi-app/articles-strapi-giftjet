module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "postgres-articles-strapi-giftjet"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "possue-local"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "Accusync70"),
        ssl: env.bool("DATABASE_SSL", false),
        //ssl: { rejectUnauthorized: false },
      },
      options: {
        pool: {
          min: 0,
          max: 15,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000,
        },
      },
    },
  },
});
