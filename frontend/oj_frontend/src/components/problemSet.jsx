import { useEffect } from "react"
import React,{useState} from "react";
import Navbar from "./navbar"
import axios from "axios"
import Card from "./pCard"
import "./problemSet.css"
import CardAdmin from "./CardAdmin";
import { Button } from "@mui/base";
import { typeState } from "../store/atom/type";
import { useRecoilValue } from "recoil";
function ProblemSet(){
    let [problems,setProblems]=useState();
    const type=useRecoilValue(typeState);
    useEffect(()=>{
         axios.get("http://localhost:3000/problems").then((resp)=>{
            problems=resp.data.problems;
        setProblems(problems);
        console.log(problems);
        })
      
    },[])

    if(problems===undefined){
        return <>
        loading...
        </>
    }
  if(type!='admin'){  
return <>
<Navbar></Navbar>
<div className="all-problems"style={{display:"flex",justifyContent:"center", alignContent:"center",paddingTop:20,flexWrap:"wrap" }}>
{
    problems.map((e)=>{
        return <Card title={e.title} sdes={e.shortdes} submissions={e.submissions} difficulty={e.difficulty} pid={e._id}></Card>
    })
}
</div>
</>
  }
  else if(type=='admin'){
    return <>
<Navbar></Navbar>
<div style={{display:"flex",justifyContent:"center", alignContent:"center",paddingTop:20,flexWrap:"wrap"}}>
{
    problems.map((e)=>{
        return <CardAdmin title={e.title} sdes={e.shortdes} submissions={e.submissions} difficulty={e.difficulty} pid={e._id}></CardAdmin>
    })
}
</div>
</>
  }
}
export default ProblemSet
