require('dotenv').config();
const pgp = require('pg-promise')();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432, 
  database: 'postgres', 
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
};

const db = pgp(dbConfig);
const newDatabaseName = 'cucine';

console.log(`Creating database ${newDatabaseName}...`);
db.none(`CREATE DATABASE $1:name`, [newDatabaseName])
  .then(() => {
    console.log(`Database '${newDatabaseName}' created successfully.`);
    pgp.end(); // Close the database connection
  })
  .catch((error) => {
    console.log(error.message);
    pgp.end(); // Close the database connection in case of an error
  });