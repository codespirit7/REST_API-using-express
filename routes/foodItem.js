const router = require("express").Router();
const FoodItems = require("../models/FoodItems");


router.post("/food_items", async(req, res) => {
    try{
        const newItem = new FoodItems({
            name: req.body.name,
            calories: req.body.calories,
            protein:req.body.protein,
            carb: req.body.carb,
            fat: req.body.fat,
            acceptedUnits: req.body.acceptedUnits,
            itemWeight: req.body.itemWeight
        })
        const fooditem = await newItem.save();
        res.status(200).json(newItem);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/food_items", async(req, res) =>{
    try{
       FoodItems.find()
       .then(result => {
        res.status(200).json({
            foodName: result
        })
        
       })
    }catch(err){
        res.status(500).json(err);
    }
   

})

module.exports = router;