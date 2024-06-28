import { useEffect } from "react";
import "./navbar.css"
import { useRecoilValue } from "recoil";
import { typeState } from "../store/atom/type";
import { userNameState } from "../store/atom/username";
import { useNavigate } from "react-router-dom";
function Navbar(){
   const navigate=useNavigate();
 let type=useRecoilValue(typeState);
 console.log(type);
    if(type !=undefined){
        if(type=='admin')
        return (
            <>
            
            <div class="navbar">
               <div class="logo">
                <a  class="a" onClick={()=>{navigate("/")}} href="#">Codify</a>
                </div>
                <ul class="links">
                <li class="li"><a class="a" onClick={()=>{navigate("/problemSet")}} href="#">Problem</a></li>
                <li class="li"><a class="a" href="#">Contests</a></li>
                <li class="li"><a class="a" href="#">Submissions</a></li>
                <li class="li"><a class="a" href="#">Info</a></li>
                <li class="li"><a class="a" onClick={()=>{navigate("/addproblem")}}href="#">Add Problem</a></li>
                <li class="li"><a class="a" onClick={()=>{navigate("/addcontest")}}href="#">Add Contest</a></li>
                </ul>
                <a href="/" class="action_btn">Logout</a>
                
              
            </div>
              
            
            </>
        )
    if(type=='user'){
        return (
            <>
            
            <div class="navbar">
               <div class="logo">
                <a  class="a" onClick={()=>{navigate("/")}} href="#">Codify</a>
                </div>
                <ul class="links">
                <li class="li"><a class="a" onClick={()=>{navigate("/problemSet")}} href="#">Problems</a></li>
                <li class="li"><a class="a" href="#">Contests</a></li>
                <li class="li" ><a class="a" href="#">Submissions</a></li>
                <li class="li"><a class="a" href="#">Info</a></li>
                
                </ul>
                <a href="/" class="action_btn">Logout</a>
                
              
            </div>
            </>)
              
            
    }
    }

    else{
    return (
        <>
        
        <div class="navbar">
           <div class="logo">
            <a class="a" onClick={()=>{navigate("/")}} href="#">Codify</a>
            </div>
            <ul class="links">
            <li class="li"><a class="a" onClick={()=>{navigate("/problemSet")}} href="#">Problem</a></li>
            <li class="li"><a class="a" href="#">Contest</a></li>
            <li class="li" ><a class="a" href="#">Submission</a></li>
            <li class="li"><a class="a" href="#">Info</a></li>
            </ul>
            <p></p>
            
          
        </div>
          
        
        </>
    )
}
}
export default Navbar