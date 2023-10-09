require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;

// Require Express and Sequelize
const server = require('@/server');
// const { sequelize, models } = require('@/sequelize');



server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});