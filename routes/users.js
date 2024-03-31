const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("hay its user route")
})



module.exports = router