const express = require("express")

const app = express();

const dotenv = require("dotenv");

const mongoose = require("mongoose");

const foodItemRoute = require("./routes/foodItem");
const mealRoute = require("./routes/meal");
const userRoute =  require("./routes/user")

const path = require("path")

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(console.log("connected to mongoose")).catch((err) => console.log(err))

app.get("/", (req, res)=>{
    res.send("Hello");
})
app.use("/api", foodItemRoute);
app.use("/api", mealRoute);
app.use("/api", userRoute);


app.listen(PORT, ()=>{
    console.log("server started on 5000");
})

