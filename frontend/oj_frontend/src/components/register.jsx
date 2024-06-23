import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register(){
  const  navigate=useNavigate();

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
  return (
        <>
      <div style={{color:"white",paddingLeft:20}}>
      <Typography variant="h3" gutterBottom>Codify</Typography>
      </div>
      <div style={{display:'flex',justifyContent:'center',color:'white'}}>
      <Typography variant='h5'> Create an account and Start Your Coding Journey !</Typography>
     </div>
     <br />
     <br />
        <div style={{color:"white",display:"flex",justifyContent:"center"}}>
        <Card   variant={"outlined"} style={{width:400,padding:20}}>
      <TextField fullWidth={true} id="outlined-basic" label="Username" variant="outlined" onChange={changeUsername}  />
      <br />
      <br />
      <TextField  fullWidth={true} id="outlined-basic" label="First Name" variant="outlined" onChange={changeFirstName} />
      <br />
      <br />
      <TextField  fullWidth={true} id="outlined-basic" label="Last Name" variant="outlined" onChange={changeLastName} />
      <br />
      <br />
      <TextField  fullWidth={true} id="outlined-basic" label="Email" variant="outlined" onChange={changeEmail} />
      <br />
      <br />
      <TextField  fullWidth={true} id="outlined-basic" label="Password" variant="outlined" onChange={changePassword}  />
      <br />
      <br />
      {/* <Button variant='contained' onClick={()=>{
        navigate("/problemSet");
      }}>Register</Button> */}
      <Button variant="contained" onClick={async()=>{
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
          console.log(1);
          navigate("/problemSet");
          alert("Successfully Registered!");
        }
        else{
          navigate("/");
          alert(resp.data.msg);
        }
       }

      }}>Register</Button>
      <br />
      Already Registered? <a href="/signin">Signin</a>
    </Card>
   
        </div>
        </>
    )
}

export default Register
