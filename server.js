const express = require("express")
const Collection = require("./models/collection")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{
res.render('Home')
})

app.get("/Login",cors(),(req,res)=>{
    res.render('Login')
    })

// app.post("/Login",async(req,res)=>{
//     const{email,password}=req.body

//     try{
//         const user=await Collection.findOne({email:email})

//         if(!user){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/Signup",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const user=await Collection.findOne({email:email})

//         if(!user){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await Collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

app.post("/Login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Collection.findOne({ email: email });
      if (!user) {
        // User does not exist
        return res.status(400).json({ message: "User does not exist" });
      }
      // Check the password (you should have proper password hashing here)
      if (user.password === password) {
        return res.status(200).json({ message: "Login successful" });
      } else {
        return res.status(400).json({ message: "Incorrect password" });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Server error" });
    }
  });
  app.post("/Signup", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Collection.findOne({ email: email });
      if (user) {
        // User already exists
        return res.status(409).json({ message: "User already exists" });
      } else {
        // Create a new user (you should hash the password here)
        await Collection.create({ email: email, password: password });
        return res.status(200).json({ message: "Signup successful" });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Server error" });
    }
  });

app.listen(8000,()=>{
    console.log("port connected");
})

