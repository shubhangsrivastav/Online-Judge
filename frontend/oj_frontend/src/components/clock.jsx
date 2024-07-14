import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useSetRecoilState,useRecoilValue } from "recoil";
import { minState } from "../store/atom/min";
import { secState } from "../store/atom/sec";
import "./clock.css"
function Clock(){
    const navigate=useNavigate();
    const min=useRecoilValue(minState);
    const sec=useRecoilValue(secState);
    const setMin=useSetRecoilState(minState);
    const setSec=useSetRecoilState(secState);
   
const id=setTimeout(()=>{
    if(sec>0)
    setSec(sec-1);
    if(sec==0){
        if(min>0){
            setSec(59);
            setMin(min-1);
        }
        else{
            window.location.href="/oapractice";
            clearTimeout(id);
        }
        
    }
},1000)
    return (
        <div className="clock" style={{color:"white",display:"flex"}}>
        <div  className="min" style={{marginLeft:10}}>{min} min</div>
        <div className="sec" style={{marginLeft:4 }}>{sec} sec</div>
        </div>
    )
}
export default Clock