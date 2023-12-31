require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Require Express and Sequelize
const server = require('@/server');
const { sequelize, models } = require('@/sequelize');

// Require the script that inserts data into the database
const insertData = require('./scripts/insertData');

sequelize.sync({ force: true }).then(() => {  
  server.listen(PORT, () => {
    insertData({sequelize,models});
    console.log(`Server is running on port ${PORT}`);
  });
});