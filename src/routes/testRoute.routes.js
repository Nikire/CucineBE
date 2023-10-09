const { Router } = require('express');
const router = Router();

// Set up the routes
router.get('/', (req,res)=>{
  try{
    res.status(200).json("Success");
  }catch(e){
    res.status(500).json("Error");
  }
});

// Export the router
module.exports = router;
