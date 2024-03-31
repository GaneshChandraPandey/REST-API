const router = require("express").Router();
const User = require("../models/User")
//REGISTER
router.get("/register",async (req,res)=>{
    const user =  await new User ({
        UserName:"ganesh",
        email:"gpandey121",
        password:"123445"

    })
     await user.save()
     res.send("OK")
});



module.exports = router