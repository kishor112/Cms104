const { connectDatabase } = require("./Database/Database");

const app = require("express")();
const mongoose = require(mongoose)



// connecting to database
// mongoose.connect("mongodb+srv://hello:@cluster0.relb6kl.mongodb.net/?retryWrites=true&w=majority")
// .then(()=>{
//     console.log("Database connected successfully")
// })


connectDatabase





//GET API ->/
app.get("/",(req,res)=>{
    res.json({
        status : 200,
        message : "success"
    })
})



app.listen(2000,()=>{
    console.log("Nodejs has started at port 2000")
})