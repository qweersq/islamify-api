require('dotenv').config();
const { Sequelize } = require('sequelize');

const database = new Sequelize(process.env.POSTGRES_URL + "?sslmode=require", {
  dialect: 'postgres',
});

module.exports = database;



