require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Require Express and Sequelize
const server = require('@/server');
const { sequelize } = require('@/sequelize');

sequelize.sync({ force: true }).then(() => {  
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});