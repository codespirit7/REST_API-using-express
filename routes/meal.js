const router = require("express").Router();

const Meal = require("../models/Meals");

router.post("/meals", async (req, res) => {
    try{
        const meal = new Meal({
            category: req.body.category,
            name: req.body.name,
            foodItems: req.body.foodItems
        })
        const newMeal = await meal.save();
        res.status(200).json(newMeal);

    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/meals",(req,res) => {
    try{
        Meal.find()
        .then(result => {
         res.status(200).json({
             meals: result
         })
         
        })
     }catch(err){
         res.status(500).json(err);
     }
    
})

module.exports = router;