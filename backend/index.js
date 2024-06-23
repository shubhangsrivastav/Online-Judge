const express=require('express');
const bodyParser = require('body-parser');
const {DBconnections}=require('./database/db.js');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const User =require('./models/user.js');
const cors =require("cors");
const dotenv=require('dotenv');
dotenv.config();
const SECRET_KEY=process.env.SECRET_KEY;

const app=express();
DBconnections();

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

const generateJwt=(id)=>{
   var token=jwt.sign({id:id},SECRET_KEY,{expiresIn:"1h"});
    return token;
}

app.post ("/register",async(req,res)=>{
    try {
        //get the data from user
        const {userName,firstName,lastName,email,password}=req.body;
       //check that all the data should exists
        if(!userName || !firstName || !lastName || !email || !password){
            res.status(404).json({msg:"Some of the feilds is still vaccant!"});
        }
       //check if the user is alredy registered or not
        const alreadyExist=await User.findOne({email});
        if(alreadyExist){
            res.status(201).json({
                msg:"Already Registered ! Please Signin"
            })
        }
       //encrypt password
    //    const hashPassword = bcrypt.hashSync(password, 8);
       //save the user to the database
      const user= await User.create({
        userName,
        firstName,
        lastName,
        password,
        email
       });
       //generate token for user and send it 
       const token = generateJwt(user._id);
       //send the response
       const options={
        expires:new Date(Date.now()+(24*60*60*1000)),
        httpOnly:true
    }
        user.password=undefined;
        res.status(201).cookie("token",token,options).json({
            msg:"Successfull",
            user
        });
    } catch (error) {
        console.error(error);
    }
})

app.post("/signin",async(req,res)=>{
    try{
        //get the user data
        const {email,password}=req.body;
        //check all the data is present or not
        if(!email || !password){
            res.status(203).json({msg:"Bad request! Some data is missing."});
        }
        //check registered or not
        const user=await User.findOne({email});
        if(!user){
            res.status(203).json({msg:"User not registered! Please Register "});
        }
        //compare the password
        // const enteredPassword =await bcrypt.compare(password,user.password);
        
        if(password!=user.password){
            res.status(203).json({msg:"Bad request ! Password is incorrect."});
        }
        //generate Jwt
        const token=generateJwt(user._id);
        //store cookies
        const options={
            expires:new Date(Date.now()+(24*60*60*1000)),
            httpOnly:true
        }
        //send the response
        user.password=undefined;
        res.status(200).cookie("token",token,options).json({
            msg:"Successfull",
            user
        })
    }
    catch(error){
        console.error(error);
    }
})

app.listen(3000,()=>{
    console.log(" Server is listening on port 3000");
})