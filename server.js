let express = require("express")
let mongoose = require("mongoose")
let app = express()

app.use(express.json())

//connection command
mongoose.connect("mongodb://localhost:27017/mydbg3")
.then(()=>console.log("MONGO DB CONNECTED"))
.catch((err)=>console.log(err))

//schema 
let empSchema = new mongoose.Schema({
    name:String,
    phone:Number,
    dept : String
})

//model
let empModel = mongoose.model("employee",empSchema)

app.post("/upload",async (req,res)=>{
    let result = await empModel.create(req.body)
    res.json(result)
})

app.listen(3044,()=>console.log("Server is running on http://localhost:3044"))