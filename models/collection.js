const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://seuglongp:Pro0123456789@cluster1.l8giogx.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})



const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Collection = mongoose.model("Collection",userSchema)

module.exports=Collection
