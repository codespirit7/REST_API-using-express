const router = require("express").Router();
const User = require("../models/User");


router.post("/user", async (req, res) => {
    try{
        const user = new User({
          name: req.body.name,
          calorieRequirement: req.body.calorieRequirement,
          mealPlan: req.body.mealPlan,
        })

        const newuser = await user.save();
        res.status(200).json(newuser);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/user", async(req, res) => {
    try{
        User.find()
        .then(result => {
           res.status(200).json({
            User: result
           }) 
        })
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;