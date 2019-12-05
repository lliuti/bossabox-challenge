const dotenv = require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: 'VUTTR',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
