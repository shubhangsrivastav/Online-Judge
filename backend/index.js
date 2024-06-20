const express=require('express');
const bodyParser = require('body-parser');
const {DBconnections}=require('./database/db.js');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const User =require('./models/user.js')
const dotenv=require('dotenv');
dotenv.config();
const SECRET_KEY=process.env.SECRET_KEY;

const app=express();
DBconnections();

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("hello world");
})
const generateJwt=(firstName,password,id)=>{
   var token=jwt.sign({firstName:firstName,password:password,id:id},SECRET_KEY,{expiresIn:"1h"});
    return token;
}

app.post ("/register",async(req,res)=>{
    try {
        //get the data from user
        const {userName,firstName,lastName,email,password}=req.body;
       //check that all the data should exists
        if(!userName || !firstName || !lastName || !email || !password){
            res.status(404).send("Some of the feilds is still vaccant!");
        }
       //check if the user is alredy registered or not
        const alreadyExist=await User.findOne({email});
        if(alreadyExist){
            res.status(400).json({
                message:"Already Registered"
            })
        }
       //encrypt password
       const hashPassword = bcrypt.hashSync(password, 8);
       //save the user to the database
      const user= await User.create({
        userName,
        firstName,
        lastName,
        password:hashPassword,
        email
       });
       //generate token for user and send it 
       const token = generateJwt(firstName,password,user._id);
        
        user.password=undefined;
        res.status(201).json({
            msg:"You have been successfully registered!",
            user,
            token:token
        });
    } catch (error) {
        console.error(error);
    }
})

app.listen(3000,()=>{
    console.log(" Server is listening on port 3000");
})