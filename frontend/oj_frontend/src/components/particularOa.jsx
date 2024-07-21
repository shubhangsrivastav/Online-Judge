import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import Card from "./pCard";
import axios from "axios";
import Clock from "./clock";
import CardpOa from "./CardpOa";
import "./particularOa.css"
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL
function ParticularOa(){
    const [problems,setProblems]=useState();
    const {oaid}=useParams();
useEffect(()=>{
    try {
        axios.get(`${API_BASE_URL}/currentoa/${oaid}`).then((res)=>{
            console.log(res.data.oaProblems);
            setProblems(res.data.oaProblems);
        })
    } catch (error) {
        console.error(error);
    }
    
},[])
if(!problems){
return (
    <>
    loading...
    </>
)
}
return (
    <>
    <Navbar></Navbar>
    <div className="all-particularoa">
  <div className="all-particularoa-2" style={{marginBottom:20,display:"flex",justifyContent:"flex-end",marginRight:100,alignContent:"center",height:100,paddingTop:20,fontWeight:"bold",color:"orange",fontSize:22}}>
  Time Left : <Clock></Clock>
  </div>
<div style={{display:"flex",justifyContent:"center", alignContent:"center",paddingTop:20,flexWrap:"wrap"}}>
{
    problems.map((e)=>{
        return <CardpOa title={e.title} sdes={e.shortdes} submissions={e.submissions} difficulty={e.difficulty} pid={e._id}></CardpOa>
    })
}
</div>
</div>
    </>
)
}
export default ParticularOa