const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const Ingredient = sequelize.define('ingredient', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
	Ingredient.associate = function (models) {
		Ingredient.belongsToMany(models.Recipe, { through: 'recipe_ingredient' });
	};
	return Ingredient;
};
