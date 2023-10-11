const { Sequelize } = require('sequelize');
const { DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST || 'localhost',
  dialect: 'postgres',
  port: DB_PORT || 5432,
  logging: false,
});

const models = require('./models')(sequelize);

// Associations

module.exports = { sequelize, models };