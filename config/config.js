require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'user-challenge',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};

