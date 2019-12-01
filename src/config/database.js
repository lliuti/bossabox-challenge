module.exports = {

  dialect: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: 'VUTTR',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },

};