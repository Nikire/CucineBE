const { Router } = require('express');
const router = Router();

// Set up the routes
router.get('/', (req,res)=>{
  if(req.body.error){
    return res.jsonError();
  }
    res.jsonOk(["Good","Response"],"Success");
});

// Export the router
module.exports = router;
