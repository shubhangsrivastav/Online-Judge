import { useSetRecoilState } from "recoil";
import Navbar from "./navbar";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import "./signin.css"
import axios from 'axios';
import { typeState } from "../store/atom/type";
import { userNameState } from "../store/atom/username";
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL
function Signin(){
    const  navigate=useNavigate();
   const setType=useSetRecoilState(typeState);
   const setUsernameState=useSetRecoilState(userNameState);
    const [email,setEmail]=useState("");  
    const [password,setPassword]=useState("");  
    
   
    const changeEmail=(e)=>{
      setEmail(e.target.value);
    }
    const changePassword=(e)=>{
      setPassword(e.target.value);
    }

return (<>


<Navbar></Navbar>
<div className="all-signin" style={{display:"flex",justifyContent:"center", marginTop:30}}>
<div className= "wrapper">
    <form action="">
        <h1>Signin</h1>
        <div className="input-box">
            <input type="text" id="emailbox" placeholder="Email" required onChange={changeEmail}/>
            <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
            <input id="password box" type="password" placeholder="Password" required onChange={changePassword}/>
            <i className='bx bxs-lock'></i>
        </div>
        <div className="remember-forgot">
    <label><input id="checkbox" type="checkbox" />Remember me</label>
    <a href="#">Forgot Password</a>
        </div>
        <div>
        <Button variant="contained" onClick={
        async()=>{
          if(password=="" || email==""){
           alert("Some feilds are empty! Kindly fill them.")
          }
          else{
           const resp =await axios.post(`${API_BASE_URL}/signin`,{
             email:email,password:password
           });
          //  console.log(resp.data);
          //  console.log(typeof(resp.data.msg));
           if(resp.data.msg==="Successfull"){
            //  console.log(1);
              setType(resp.data.type);
              setUsernameState(resp.data.user.userName);
              localStorage.setItem("token",resp.data.token);
             navigate("/problemSet");
             alert("Successfully Signed in!");
           }
           else{
             navigate("/");
             alert(resp.data.msg);
           }
          }
   
         }
      }>Sign in</Button>
      </div>
        <div className="register-link">
            <p>Dont't have an account? <a onClick={()=>{
              navigate("/register");
            }}>Register</a></p>

        </div>
    </form>

    </div>
    </div>  
</>)
}

export default Signin