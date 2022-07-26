const mongoose = require("mongoose");

const FoodItemsSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    calories:{
        type: String,
        required: true,
    },
    protein:{
        type: String,
        required: true,
    },
    carb: {
        type: String,
        required: true,
    },
    fat:{
        type: String,
        required: true,
    },
    acceptedUnits: {
        type: String,
        required:true,
        enum: ["ml", "liter", "kg","g"],
        
    },
    itemWeight:{
        type: String,
        required:true,
    }
})

module.exports = mongoose.model("FoodItem", FoodItemsSchema);