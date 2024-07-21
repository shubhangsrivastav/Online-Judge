
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import "./addproblem.css"
import { Button } from '@mui/material';
import { useSetRecoilState } from "recoil";
import { typeState } from "../store/atom/type";
import { userNameState } from "../store/atom/username";
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;
function AddOa() {
    const  navigate=useNavigate();
  const [company,setCompany]=useState("");  
  const [noOfQues,setNoOfQues]=useState("");  
  const [timeDuration,setTimeDuration]=useState("");  
  const [givenBy,setGivenBy]=useState("");  
  const [questionIds,setQuesDetail]=useState("");  
  
  const changeCompany=(e)=>{
    setCompany(e.target.value);
  }
  const changeNoOfQue=(e)=>{
    setNoOfQues(e.target.value);
  }
  const changeQuesIds=(e)=>{
    setQuesDetail(e.target.value);
  }
  const changeDuration=(e)=>{
    setTimeDuration(e.target.value);
  }
  const changeGivenBy=(e)=>{
    setGivenBy(e.target.value);
  }
 
  
    return (
        <>
        <Navbar></Navbar>
        <div style={{display:"flex",justifyContent:"center",marginTop:20}}>
    <div className= "wrapperp" style={{ marginTop:-10, paddingBottom:15}}>
        <form action="">
            <h1>Online Assesment Details</h1>
            <div style={{display:'flex',margin:20}}>
            <div className="input-boxp">
                <input type="text" id="title box" placeholder="Company" required onChange={changeCompany}/>
                
            </div>
            <div className="input-boxp">
                <input id="Difficulty box" type="text" placeholder="Number of Questions" required onChange={changeNoOfQue}/>
                
            </div>
            </div>
            <div className="input-boxp"style={{margin:20}} >
                <input id="description box" type="text" placeholder="Question IDs" required onChange={changeQuesIds}/>
               
            </div>
            
            <div style={{display:'flex',margin:20}}>
            <div className="input-boxp">
                <input id="input box" type="text" placeholder="Duration" required onChange={changeDuration}/>
                
            </div>
            <div className="input-boxp">
                <input id="output box" type="text" placeholder="Given By" required onChange={changeGivenBy}/>
                
            </div>
            </div>
           
            <div style={{display:"flex",justifyContent:"center",margin:20}}>
               
             <Button variant="contained" onClick={
             async()=>{
              if(company=="" || noOfQues=="" || timeDuration=="" || givenBy=="" || questionIds=="" ){
         alert("Some feilds are empty! Kindly fill them.")
       }
               else{
                const resp =await axios.post(`${API_BASE_URL}/addoa`,{
                    company,noOfQues,timeDuration,givenBy,questionIds
                  },);
               console.log(resp.data);
               
               console.log(typeof(resp.data.msg));
               if(resp.data.msg==="Successfull"){
                 navigate("/oapractice");
                 alert("Successfully Added OA");
               }
               else{
                alert(resp.data.msg);
               }
              }
       
             }
          }>Add OA</Button> 
          </div>
            
        </form>
    
        </div>
        </div>  
        </>
    )
}
export default AddOa