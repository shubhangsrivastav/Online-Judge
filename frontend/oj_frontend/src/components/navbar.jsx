import { useEffect } from "react";
import "./navbar.css"
function Navbar(){
    let type=undefined;
 
    if(type !=undefined){
        return (
            <>
            
            <div class="navbar">
               <div class="logo">
                <a  class="a" href="#">Codify</a>
                </div>
                <ul class="links">
                <li class="li"><a class="a" href="#">Problem</a></li>
                <li class="li"><a class="a" href="#">Contest</a></li>
                <li class="li" ><a class="a" href="#">Submission</a></li>
                <li class="li"><a class="a" href="#">Submission</a></li>
                <li class="li"><a class="a" href="#">Info</a></li>
                <li class="li"><a class="a" href="#">Add Problem</a></li>
                </ul>
                <a href="#" class="action_btn">Logout</a>
                
              
            </div>
              
            
            </>
        )
    }
    else{
    return (
        <>
        
        <div class="navbar">
           <div class="logo">
            <a class="a"href="#">Codify</a>
            </div>
            <ul class="links">
            <li class="li"><a class="a" href="#">Problem</a></li>
            <li class="li"><a class="a" href="#">Contest</a></li>
            <li class="li" ><a class="a" href="#">Submission</a></li>
            <li class="li"><a class="a" href="#">Info</a></li>
            </ul>
            <a href="#" class="action_btn"  >Logout</a>
            
          
        </div>
          
        
        </>
    )
}
}
export default Navbar