
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import "./addproblem.css"
import { Button } from '@mui/material';
import { useSetRecoilState } from "recoil";
import { typeState } from "../store/atom/type";
import { userNameState } from "../store/atom/username";
function AddProblem() {
    const  navigate=useNavigate();
    const setType=useSetRecoilState(typeState);
  const setUsernameState=useSetRecoilState(userNameState);
  const [title,setTitle]=useState("");  
  const [description,setDescription]=useState("");  
  const [shortdes,setShortdes]=useState("");  
  const [input,setInput]=useState("");  
  const [output,setOutput]=useState("");  
  const [difficulty,setDifficulty]=useState("");  
  const [submissions,setSubmissions]=useState();  
  
  const changeTitle=(e)=>{
    setTitle(e.target.value);
  }
  const changeDescription=(e)=>{
    setDescription(e.target.value);
  }
  const changeShortdes=(e)=>{
    setShortdes(e.target.value);
  }
  const changeInput=(e)=>{
    setInput(e.target.value);
  }
  const changeOutput=(e)=>{
    setOutput(e.target.value);
  }
  const changeDifficulty=(e)=>{
    setDifficulty(e.target.value);
  }
  const changeSubmissions=(e)=>{
    setSubmissions(e.target.value);
  }
  
    return (
        <>
        <Navbar></Navbar>
        <div style={{display:"flex",justifyContent:"center",marginTop:20}}>
    <div className= "wrapperp" style={{ marginTop:-10, paddingBottom:15}}>
        <form action="">
            <h1>Problem Details</h1>
            <div style={{display:'flex',margin:20}}>
            <div className="input-boxp">
                <input type="text" id="title box" placeholder="Title" required onChange={changeTitle}/>
                
            </div>
            <div className="input-boxp">
                <input id="Difficulty box" type="text" placeholder="Difficulty" required onChange={changeDifficulty}/>
                
            </div>
            </div>
            <div className="input-boxp"syle={{margin:20}} >
                <input id="description box" type="text" placeholder="Description" required onChange={changeDescription}/>
               
            </div>
            <div style={{display:'flex',margin:20}}>
            <div className="input-boxp">
                <input id="input box" type="text" placeholder="Input" required onChange={changeInput}/>
                
            </div>
            <div className="input-boxp">
                <input id="output box" type="text" placeholder="Output" required onChange={changeOutput}/>
                
            </div>
            </div>
            <div style={{display:'flex', justifyContent:"space-between" ,margin:20}}>
            <div className="input-boxp">
                <input id="=shortdes box" type="text" placeholder="Short Description" required onChange={changeShortdes}/>
                
            </div>
            <div className="input-boxp">
                <input id="submissions box" type="text" placeholder="Submissions" required onChange={changeSubmissions}/>
                
            </div>
            </div>
            
            <div style={{display:"flex",justifyContent:"center",margin:20}}>
               
             <Button variant="contained" onClick={
             async()=>{
              if(title=="" || description=="" || input=="" || output=="" || submissions=="" || difficulty=="" || shortdes==""){
         alert("Some feilds are empty! Kindly fill them.")
       }
               else{
                const resp =await axios.post("http://localhost:3000/addproblem",{
                    title:title,description:description,shortdes:shortdes,difficulty:difficulty,submissions:submissions,input:input,output:output
                  },{headers: {
                    Cookie: document.cookie 
                  }});
               console.log(resp.data);
               
               console.log(typeof(resp.data.msg));
               if(resp.data.msg==="Successfull"){
                 navigate("/problemSet");
                 alert("Successfully Registered!");
               }
               else{
                 navigate("/register");
                 alert(resp.data.msg);
               }
              }
       
             }
          }>Add Problem</Button> 
          </div>
            
        </form>
    
        </div>
        </div>  
        </>
    )
}
export default AddProblem