let Ingredients = require('@/json/ingredients.json')
let Recipes = require('@/json/recipes.json')
const { Op } = require('sequelize');

module.exports = async ({sequelize,models:{Ingredient,Recipe}}) => {
  Ingredients = Ingredients.map(ingredient => ({ name : ingredient}));
  console.log(Ingredients)
  await Ingredient.bulkCreate(Ingredients);
  Recipes.forEach(async recipe => {
    let actualRecipe = await Recipe.create({
      name: recipe.nombre,
      description: recipe?.description,
      steps: recipe?.steps
    })
    let allActualIngredients = await Ingredient.findAll({
      where: {
        name: {
          [Op.in]: recipe.ingredientes
        }
      }
    })
    await actualRecipe.addIngredients(allActualIngredients)

  })
}