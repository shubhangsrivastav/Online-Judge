import { useEffect } from "react"
import React,{useState} from "react";
import Navbar from "./navbar"
import axios from "axios"
import Card from "./pCard"
import { Button } from "@mui/base";
function ProblemSet(){
    let [problems,setProblems]=useState();
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
    
return <>
<Navbar></Navbar>
<div style={{display:"flex",justifyContent:"center", alignContent:"center",paddingTop:20,flexWrap:"wrap"}}>
{
    problems.map((e)=>{
        return <Card title={e.title} sdes={e.shortdes} submissions={e.submissions} difficulty={e.difficulty} pid={e._id}></Card>
    })
}
</div>
</>

}
export default ProblemSet
