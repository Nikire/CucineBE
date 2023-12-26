module.exports = (sequelize) => {
  const Ingredient = require('./Ingredient')(sequelize);
  const Recipe = require('./Recipe')(sequelize);
	return { Ingredient, Recipe };
};
