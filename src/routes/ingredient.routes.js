const { Router } = require('express');
const router = Router();
const { getAllIngredients } = require('@/controllers/ingredients')

router.get('/',getAllIngredients);

module.exports = router;
