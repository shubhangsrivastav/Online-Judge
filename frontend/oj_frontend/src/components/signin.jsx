import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Signin(){
  const  navigate=useNavigate();

  const [email,setEmail]=useState("");  
  const [password,setPassword]=useState("");  
  
  
  const changeEmail=(e)=>{
    setEmail(e.target.value);
  }
  const changePassword=(e)=>{
    setPassword(e.target.value);
  }
return (
<div>
    <div style={{color:"white",paddingLeft:20}}>
    <Typography variant="h3" gutterBottom>Codify</Typography>
    </div>
    <div style={{color:"white",display:"flex",justifyContent:"center"}}>
        <Card   variant={"outlined"} style={{width:400,padding:20}}>
      
      <TextField  fullWidth={true} id="outlined-basic" label="Email" variant="outlined" onChange={changeEmail} />
      <br />
      <br />
      <TextField  fullWidth={true} id="outlined-basic" label="Password" variant="outlined" onChange={changePassword} />
      <br />
      <br />
      <Button variant="contained" onClick={
        async()=>{
          if(password=="" || email==""){
           alert("Some feilds are empty! Kindly fill them.")
          }
          else{
           const resp =await axios.post("http://localhost:3000/signin",{
             email:email,password:password
           });
           console.log(resp.data);
           console.log(typeof(resp.data.msg));
           if(resp.data.msg==="Successfull"){
             console.log(1);
             navigate("/problemSet");
             alert("Successfully Signed in!");
           }
           else{
             navigate("/signin");
             alert(resp.data.msg);
           }
          }
   
         }
      }>Signin</Button>
      <br />
     
    </Card>
    </div>
    </div>
)
}
export default  Signin