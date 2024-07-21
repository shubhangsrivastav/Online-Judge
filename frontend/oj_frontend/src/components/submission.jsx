import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./submission.css"
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL
function Submission(){
const [submission,setSubmission]=useState();
useEffect(()=>{
   axios.get(`${API_BASE_URL}/submissions`).then((resp)=>{
        setSubmission(resp.data.submissions);
        console.log(resp.data.submissions);
    });
    
    
},[]);
if(submission===undefined){
    return (<>
        loading
    </>
    )
}
return (
   <>
        <Navbar></Navbar>
        <div className="all-submission" style={{width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",marginTop:30}}>
            {
               
             submission.map(e => {
                let verdict=e.verdict;
                   return  <div className="submission">
                    <div className="subfeild">Username: <p style={{color:"rgb(159, 56, 168)",marginLeft:10}}>{e.userName}</p></div>
                    <div className="subfeild">Title:<p style={{color:"orange",marginLeft:10}}>{e.problemTitle}</p></div>
                    <div className="subfeild">Verdict:{verdict==="Accepted" && (<p style={{color:"lightgreen",marginLeft:10}}>{e.verdict}</p>)}
                    {verdict!=="Accepted" && (<p style={{color:"red",marginLeft:10}}>{e.verdict}</p>)}
                    </div>
                    
                    <div className="subfeild">Time : {e.timeOfSubmission}</div>
                    </div>
                }) 
            }

        </div>
        
        </>
)
}
export default  Submission;