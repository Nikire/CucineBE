const { Router } = require('express');

// Custom middlewares

// Import of routes
const testRoute = require('./testRoute.routes');

// Express Router
const router = Router();

const routes = [
  {path:'/',import: testRoute}
];

// Set up the routes
routes.forEach((route) => {
  if(!route.middlewares){
    router.use(route.path,route.import);
  }else{
    // TODO add middleware logic
    // server.use(route.path,route.import)
  }
})

module.exports = router;
