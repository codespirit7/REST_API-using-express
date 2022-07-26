const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema({
    category:{
        type: String,
        required: true,
        enum: ["Breakfast", "Lunch", "Evening Snack", "Dinner"]
    },
    name:{
        type:String,
        required: true,
    },
    foodItems:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model("Meals", MealSchema);