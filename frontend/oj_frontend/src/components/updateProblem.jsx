import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import "./addproblem.css"
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';

function UpdateProblem(){
    const { pid } = useParams();
    const  navigate=useNavigate();
    const [problem,setProblem]=useState({});
    const [title,setTitle]=useState(problem.title);  
    const [description,setDescription]=useState(problem.description);  
    const [shortdes,setShortdes]=useState(problem.shortdes);  
    const [input,setInput]=useState(problem.input);  
    const [output,setOutput]=useState(problem.output);  
    const [difficulty,setDifficulty]=useState(problem.difficulty);  
    const [submissions,setSubmissions]=useState(problem.submissions);  
    const [exampleInput,setexampleInput]=useState(problem.exampleInput);  
    const [exampleOutput,setexampleOutput]=useState(problem.exampleOutput);  
    const [testCaseInput,settestCaseInput]=useState(problem.testCaseInput);  
    const [testCaseOutput,settestCaseOutput]=useState(problem.testCaseOutput);
  
   
    const changeTitle=(e)=>{
      setTitle(e.target.value);
    }
    const changeDescription=(e)=>{
      setDescription(e.target.value);
    }
    const changeShortdes=(e)=>{
      setShortdes(e.target.value);
    }
    const changeInput=(e)=>{
      setInput(e.target.value);
    }
    const changeOutput=(e)=>{
      setOutput(e.target.value);
    }
    const changeDifficulty=(e)=>{
      setDifficulty(e.target.value);
    }
    const changeSubmissions=(e)=>{
      setSubmissions(e.target.value);
    }
    const changeExampleInput=(e)=>{
      setexampleInput(e.target.value);
    }
    const changeExampleOutput=(e)=>{
      setexampleOutput(e.target.value);
    }
    const changeTestcaseInput=(e)=>{
      settestCaseInput(e.target.value);
    }
    const changeTestcaseOutput=(e)=>{
      settestCaseOutput(e.target.value);
    } 
    useEffect(() => {
        axios.get(`http://localhost:3000/currentproblem/${pid}`).then((res) => {
          setProblem(res.data.problem);
          console.log(problem);
          
        });
      },[]);
      if (!problem) {
        return <>loading</>;
      }
      
    
   
  else{
    return  (
        <>
        <Navbar></Navbar>
       
        <div style={{display:"flex",justifyContent:"center",marginTop:20}}>
    <div className= "wrapperp" style={{ marginTop:-10, paddingBottom:15}}>
        <form action="">
            <h1>Problem Details</h1>
            <div style={{display:'flex',margin:20}}>
            <div className="input-boxp">
                <input type="text" id="title box" placeholder={problem.title} required onChange={changeTitle}/>
                
            </div>
            <div className="input-boxp">
                <input id="Difficulty box" type="text" placeholder={problem.difficulty} required onChange={changeDifficulty}></input>
                
            </div>
            </div>
            <div className="input-boxp"style={{margin:20}} >
                <input id="description box" type="text" placeholder={problem.description} required onChange={changeDescription}/>
               
            </div>
            <div className="input-boxp" style={{margin:20}}>
                <input id="input box" type="text" placeholder={problem.input} required onChange={changeInput}/>
                
            </div>
            <div className="input-boxp" style={{margin:20}}>
                <input id="output box" type="text" placeholder={problem.output} required onChange={changeOutput}/>
                
            </div>
            <div style={{display:'flex',margin:20}}>
            <div className="input-boxp">
                <input id="input box" type="text" placeholder={problem.exampleInput} required onChange={changeExampleInput}/>
                
            </div>
            <div className="input-boxp">
                <input id="output box" type="text" placeholder={problem.exampleOutput} required onChange={changeExampleOutput}/>
                
            </div>
            </div>
            <div style={{display:'flex',margin:20}}>
            <div className="input-boxp">
                <input id="input box" type="text" placeholder={problem.testCaseInput} required onChange={changeTestcaseInput}/>
                
            </div>
            <div className="input-boxp">
                <input id="output box" type="text" placeholder={problem.testCaseOutput} required onChange={changeTestcaseOutput}/>
                
            </div>
            </div>
            <div style={{display:'flex', justifyContent:"space-between" ,margin:20}}>
            <div className="input-boxp">
                <input id="=shortdes box" type="text" placeholder={problem.shortdes} required onChange={changeShortdes}/>
                
            </div>
            <div className="input-boxp">
                <input id="submissions box" type="text" placeholder={problem.submissions} required onChange={changeSubmissions}/>
                
            </div>
            </div>
            
            <div style={{display:"flex",justifyContent:"center",margin:20}}>
               
             <Button variant="contained" onClick={
             async()=>{
              if(title=="" || description=="" || input=="" || output=="" || submissions=="" || difficulty=="" || shortdes=="" || exampleInput=="" || exampleOutput=="" || testCaseInput=="" || testCaseOutput==""){
         alert("Some feilds are empty! Kindly fill them.")
       }
               else{
                const resp =await axios.put(`http://localhost:3000/updateproblem/${pid}`,{
                    title:title,description:description,shortdes:shortdes,difficulty:difficulty,submissions:submissions,input:input,output:output,exampleInput,exampleOutput,testCaseInput,testCaseOutput
                  },);
               console.log(resp.data);

               if(resp.data.msg==="Successfull"){
                 navigate("/problemSet");
                 alert("Successfully Updated Problem");
               }
               else{
                alert(resp.data.msg);
               }
              }
       
             }
          }>Update Problem</Button> 
          <Button variant="contained" style={{marginLeft:10}} startIcon={<DeleteIcon />} onClick={async()=>{
            const resp=await axios.delete(`http://localhost:3000/delete/${pid}`);
            if(resp.data.message=="Successfull"){
                navigate("/problemSet");
                alert("Problem Deleted Successfully");
            }
            else{
                alert(resp.data.message);
            }
          }}>
  Delete
</Button>
          </div>
            
        </form>
    
        </div>
        </div>  
        </>
    )
}
}
export default UpdateProblem