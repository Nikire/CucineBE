const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const Recipe = sequelize.define('recipe', {
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
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		steps: {
			type: DataTypes.ARRAY(DataTypes.TEXT),
			allowNull: true, //Change to false once live
		}
	});
	Recipe.associate = function (models) {
		Recipe.belongsToMany(models.Ingredient, { through: 'recipe_ingredient' });
	};
	return Recipe;
};
