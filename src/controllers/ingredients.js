const { sequelize, models: { Ingredient } } = require('@/sequelize');

async function getAllIngredients(req,res,next) {
  try{
    const ingredients = await Ingredient.findAll();
    res.jsonOk(ingredients);
  }catch(e){
    next(e);
  }
}

module.exports = {
  getAllIngredients
}