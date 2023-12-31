const { Router } = require('express');

// Custom middlewares

// Import of routes
const testRoute = require('./testRoute.routes');
const ingredientRoute = require('./ingredient.routes');

// Express Router
const router = Router();

const routes = [
  {path:'/',router: testRoute},
  {path:'/ingredients',router: ingredientRoute}
];

// Set up the routes
routes.forEach((route) => {
  if(!route.middlewares){
    router.use(route.path,route.router);
  }else{
    // TODO add middleware logic
    // router.use(route.path,route.router)
  }
})

module.exports = router;
