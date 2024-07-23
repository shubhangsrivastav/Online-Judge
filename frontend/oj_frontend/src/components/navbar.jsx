import { useEffect } from "react";
import "./navbar.css"
import { useRecoilValue,useSetRecoilState } from "recoil";
import { typeState } from "../store/atom/type";
import { userNameState } from "../store/atom/username";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function Navbar(){
   const navigate=useNavigate();
 const type=useRecoilValue(typeState);
//  console.log(type);
 const setType=useSetRecoilState(typeState);
 const setUsername=useSetRecoilState(userNameState);
 
 const token=localStorage.getItem("token");

 useEffect(()=>{
    // console.log(token);
    // console.log(2);
  
      
    try{

        if(token!=undefined){
            // console.log(1);
  axios.get('${API_BASE_URL}/me',{headers:{
    authorisation:"Bearer "+token
  }}).then(resp => {
    
        // console.log(resp.data.userDetails);
        const userDetails=resp.data.userDetails;
        setType(userDetails.type);
        setUsername(userDetails.userName);
    
    })}
}
    catch(error){
        console.error(error)
    }
 },[]);
 const handleDropdown=()=>{
    const dropDownMenu=document.querySelector('.dropdown_menu');
    dropDownMenu.classList.toggle('open');
 }


    if(type !=undefined){
        if(type=='admin')
        return (
            <>
            
            <div class="navbar">
               <div class="logo">
                <a  class="a" style={{color:"orange"}} onClick={()=>{window.location.href="/"}} href="#">Codify</a>
                </div>
                <ul class="links">
                <li class="li"><a class="a" onClick={()=>{navigate("/problemSet")}} href="#">Problem</a></li>
                <li class="li"><a class="a"  onClick={()=>{navigate("/oapractice")}} href="#">OA Practice</a></li>
                <li class="li"><a class="a"  onClick={()=>{navigate("/submission")}} href="#">Submissions</a></li>
                <li class="li"><a class="a" onClick={()=>{navigate("/addproblem")}}href="#">Add Problem</a></li>
                <li class="li"><a class="a" onClick={()=>{navigate("/addoa")}}href="#">Add OA</a></li>
                
                </ul>
                <a href="/" onClick={()=>{localStorage.setItem("token",undefined)}} class="action_btn">Logout</a>
                <div className="toggle_btn">
                    <i onClick={()=>{
                        const toggleBtn=document.querySelector(".toggle_btn");
                        const toggleBtnIcon=document.querySelector(".toggle_btn i");
                        const dropdown_menu=document.querySelector(".dropdown_menu");
                        dropdown_menu.classList.toggle('open');
                        const isOpen=dropdown_menu.classList.contains('open');
                        toggleBtnIcon.classList=isOpen?'fa-solid fa-xmark':'fa-solid fa-bars'
                    }} className="fa-solid fa-bars"></i>
                </div>
              <div className="dropdown_menu">
              <li class="li"><a class="a" onClick={()=>{navigate("/problemSet")}} href="#">Problems</a></li>
                <li class="li"><a class="a" onClick={()=>{navigate("/oapractice")}} href="#">OA Practice</a></li>
                <li class="li" ><a class="a" onClick={()=>{navigate("/submission")}} href="#">Submissions</a></li>
                <li class="li"> <a href="/" onClick={()=>{localStorage.setItem("token",undefined)}}  class="dropdown_action_btn">Logout</a></li>
              </div>
              
              
            </div>
              
            
            </>
        )
    if(type=='user'){
        return (
            <>
            
            <div class="navbar">
               <div class="logo">
                <a  class="a"  style={{color:"orange"}} onClick={()=>{window.location.href="/"}} href="#">Codify</a>
                </div>
                <ul class="links">
                <li class="li"><a class="a" onClick={()=>{navigate("/problemSet")}} href="#">Problems</a></li>
                <li class="li"><a class="a" onClick={()=>{navigate("/oapractice")}} href="#">OA Practice</a></li>
                <li class="li" ><a class="a" onClick={()=>{navigate("/submission")}} href="#">Submissions</a></li>
                
                
                </ul>
                <a href="/" onClick={()=>{localStorage.setItem("token",undefined)}}  class="action_btn">Logout</a>
                <div className="toggle_btn">
                    <i onClick={()=>{
                        const toggleBtn=document.querySelector(".toggle_btn");
                        const toggleBtnIcon=document.querySelector(".toggle_btn i");
                        const dropdown_menu=document.querySelector(".dropdown_menu");
                        dropdown_menu.classList.toggle('open');
                        const isOpen=dropdown_menu.classList.contains('open');
                        toggleBtnIcon.classList=isOpen?'fa-solid fa-xmark':'fa-solid fa-bars'
                    }} className="fa-solid fa-bars"></i>
                </div>
              <div className="dropdown_menu">
              <li class="li"><a class="a" onClick={()=>{navigate("/problemSet")}} href="#">Problems</a></li>
                <li class="li"><a class="a" onClick={()=>{navigate("/oapractice")}} href="#">OA Practice</a></li>
                <li class="li" ><a class="a" onClick={()=>{navigate("/submission")}} href="#">Submissions</a></li>
                <li class="li"> <a href="/" onClick={()=>{localStorage.setItem("token",undefined)}}  class="dropdown_action_btn">Logout</a></li>
              </div>
              
            </div>
            </>)
              
            
    }
    }

    else{
    return (
        <>
        
        <div class="navbar">
           <div class="logo">
            <a class="a" style={{color:"orange"}} onClick={()=>{window.location.href="/"}} href="#">Codify</a>
            </div>
            <ul class="links">
            <li class="li"><a class="a" onClick={()=>{navigate("/problemSet")}} href="#">Problem</a></li>
            <li class="li"><a class="a" onClick={()=>{navigate("/oapractice")}}  href="#">OA Practice</a></li>
            <li class="li" ><a class="a" onClick={()=>{navigate("/submission")}} href="#">Submission</a></li>
           
            </ul>
            <p></p>
            <div className="toggle_btn">
                    <i onClick={()=>{
                        const toggleBtn=document.querySelector(".toggle_btn");
                        const toggleBtnIcon=document.querySelector(".toggle_btn i");
                        const dropdown_menu=document.querySelector(".dropdown_menu");
                        dropdown_menu.classList.toggle('open');
                        const isOpen=dropdown_menu.classList.contains('open');
                        toggleBtnIcon.classList=isOpen?'fa-solid fa-xmark':'fa-solid fa-bars'
                    }} className="fa-solid fa-bars"></i>
                </div>
              <div className="dropdown_menu">
              <li class="li"><a class="a" onClick={()=>{navigate("/problemSet")}} href="#">Problems</a></li>
                <li class="li"><a class="a" onClick={()=>{navigate("/oapractice")}} href="#">OA Practice</a></li>
                <li class="li" ><a class="a" onClick={()=>{navigate("/submission")}} href="#">Submissions</a></li>
                <li class="li"> <a href="/" onClick={()=>{localStorage.setItem("token",undefined)}}  class="dropdown_action_btn">Logout</a></li>
              </div>
          
        </div>
          
        
        </>
    )
}
}
export default Navbar