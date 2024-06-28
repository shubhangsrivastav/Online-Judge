import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import "./signin.css"
import { Button } from '@mui/material';
import { useSetRecoilState } from "recoil";
import { typeState } from "../store/atom/type";
import { userNameState } from "../store/atom/username";
function Register(){
    const  navigate=useNavigate();
    const setType=useSetRecoilState(typeState);
  const setUsernameState=useSetRecoilState(userNameState);
  const [username,setUsername]=useState("");  
  const [firstname,setFirstname]=useState("");  
  const [lastname,setLastname]=useState("");  
  const [email,setEmail]=useState("");  
  const [password,setPassword]=useState("");  
  
  const changeUsername=(e)=>{
    setUsername(e.target.value);
  }
  const changeFirstName=(e)=>{
    setFirstname(e.target.value);
  }
  const changeLastName=(e)=>{
    setLastname(e.target.value);
  }
  const changeEmail=(e)=>{
    setEmail(e.target.value);
  }
  const changePassword=(e)=>{
    setPassword(e.target.value);
  }
  return (<>


<Navbar></Navbar>
    
    <div style={{display:"flex",justifyContent:"center",marginTop:20}}>
    <div className= "wrapper" style={{marginTop:-10, paddingBottom:15}}>
        <form action="">
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" id="username box" placeholder="Username" required onChange={changeUsername}/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input id="firstname box" type="text" placeholder="First Name" required onChange={changeFirstName}/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input id="lastname box" type="text" placeholder="Last Name" required onChange={changeLastName}/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input id="email box" type="text" placeholder="Email" required onChange={changeEmail}/>
                <i class='bx bx-envelope'></i>
            </div>
            <div className="input-box">
                <input id="password box" type="password" placeholder="Password" required onChange={changePassword}/>
                <i className='bx bxs-lock'></i>
            </div>
           
            <div>
            <Button variant="contained" onClick={
            async()=>{
              if(password=="" || username=="" || lastname=="" || firstname=="" || email==""){
        alert("Some feilds are empty! Kindly fill them.")
       }
              else{
                const resp =await axios.post("http://localhost:3000/register",{
                    userName:username,firstName:firstname,lastName:lastname,email:email,password:password
                  });
               console.log(resp.data);
               console.log(typeof(resp.data.msg));
               if(resp.data.msg==="Successfull"){
          
                 setType(resp.data.type);
              setUsernameState(resp.data.user.userName);
                 navigate("/problemSet");
                 alert("Successfully Registered!");
               }
               else{
                 navigate("/register");
                 alert(resp.data.msg);
               }
              }
       
             }
          }>Register</Button>
          </div>
            
        </form>
    
        </div>
        </div>  
    </>)
    
}

export default Register