const mongoose = require("mongoose")
exports.connectDatabase = async()=>{
    // connecting to database
    //jaba samma databse sanga connect hudaina wait gara
await mongoose.connect("mongodb+srv://hello:@cluster0.relb6kl.mongodb.net/?retryWrites=true&w=majority")

    console.log("Database connected successfully")

}