import { useEffect } from "react"
import React,{useState} from "react";
import Navbar from "./navbar"
import axios from "axios"
import CardOa from "./CardOa";
import "./oapractice.css"
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL
function Oa(){
    let [oa,setOa]=useState();
  
    useEffect(()=>{
         axios.get(`${API_BASE_URL}/oa`).then((resp)=>{
            oa=resp.data.oa;
        setOa(oa);
        console.log(oa);
        })
      
    },[])

    if(oa===undefined){
        return <>
        loading...
        </>
    }

return <>
<Navbar></Navbar>
<div className="all-oa" style={{display:"flex",justifyContent:"center", alignContent:"center",paddingTop:20,flexWrap:"wrap"}}>
{
   
   oa.map((e)=>{
return <CardOa company={e.company} noOfQues={e.noOfQues} givenBy={e.givenBy} timeDuration={e.timeDuration} oaid={e._id}></CardOa>
    })
}
</div>
</>

}
export default Oa
