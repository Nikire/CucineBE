let Ingredients = require('@/json/ingredients.json')
module.exports = async ({sequelize,models:{Ingredient}}) => {
  Ingredients = Ingredients.map(ingredient => ({ name : ingredient}));
  console.log(Ingredients)
  await Ingredient.bulkCreate(Ingredients);
}