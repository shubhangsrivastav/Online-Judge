import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import "./addproblem.css"
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL

function UpdateProblem(){
    const { pid } = useParams();
    const  navigate=useNavigate();
    const [problem,setProblem]=useState(null);
    const [title,setTitle]=useState("");  
    const [description,setDescription]=useState("");  
    const [shortdes,setShortdes]=useState("");  
    const [input,setInput]=useState("");  
    const [output,setOutput]=useState("");  
    const [difficulty,setDifficulty]=useState("");  
    const [submissions,setSubmissions]=useState("");  
    const [exampleInput,setexampleInput]=useState("");  
    const [exampleOutput,setexampleOutput]=useState("");  
    const [testCaseInput,settestCaseInput]=useState("");  
    const [testCaseOutput,settestCaseOutput]=useState("");
    useEffect(() => {
      axios.get(`${API_BASE_URL}/currentproblem/${pid}`).then((res) => {
        const fetchedData=res.data.problem;
        setProblem(fetchedData);
        setTitle(fetchedData.title);
        setDescription(fetchedData.description);
        setShortdes(fetchedData.shortdes);
        setInput(fetchedData.input);
        setOutput(fetchedData.output);
        setDifficulty(fetchedData.difficulty);
        setSubmissions(fetchedData.submissions);
        setexampleInput(fetchedData.exampleInput);
        setexampleOutput(fetchedData.exampleOutput);
        settestCaseInput(fetchedData.testCaseInput);
        settestCaseOutput(fetchedData.testCaseOutput);


        
      });
    },[]);
    if (!problem) {
      return <>loading</>;
    }
    
  
   
    const changeTitle=(event)=>{
      setTitle(event.target.value);
    };
    const changeDescription=(e)=>{
      setDescription(e.target.value);
    };
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
   
    
   

    return  (
        <>
        <Navbar></Navbar>
       
        <div style={{display:"flex",justifyContent:"center",marginTop:20}}>
    <div className= "wrapperp" style={{ marginTop:-10, paddingBottom:15}}>
        <form action="">
            <h1>Problem Details</h1>
            <div style={{display:'flex',margin:20}}>
            <div className="input-boxp">
                <input type="text" id="title box" value={title} required onChange={changeTitle}/>
                
            </div>
            <div className="input-boxp">
                <input id="Difficulty box" type="text" value={difficulty} required onChange={changeDifficulty}></input>
                
            </div>
            </div>
            <div className="input-boxp"style={{margin:20}} >
        
                <input id="description box" type="text" value={description} required onChange={changeDescription}/>
               
            </div>
            <div className="input-boxp" style={{margin:20}}>
                <input id="input box" type="text" value={input} required onChange={changeInput}/>
                
            </div>
            <div className="input-boxp" style={{margin:20}}>
                <input id="output box" type="text" value={output} required onChange={changeOutput}/>
                
            </div>
            <div style={{display:'flex',margin:20}}>
            <div className="input-boxp">
                <input id="input box" type="text" value={exampleInput} required onChange={changeExampleInput}/>
                
            </div>
            <div className="input-boxp">
                <input id="output box" type="text" value={exampleOutput} required onChange={changeExampleOutput}/>
                
            </div>
            </div>
            <div style={{display:'flex',margin:20}}>
            <div className="input-boxp">
                <input id="input box" type="text" value={testCaseInput} required onChange={changeTestcaseInput}/>
                
            </div>
            <div className="input-boxp">
                <input id="output box" type="text" value={testCaseOutput} required onChange={changeTestcaseOutput}/>
                
            </div>
            </div>
            <div style={{display:'flex', justifyContent:"space-between" ,margin:20}}>
            <div className="input-boxp">
                <input id="=shortdes box" type="text" value={shortdes} required onChange={changeShortdes}/>
                
            </div>
            <div className="input-boxp">
                <input id="submissions box" type="text" value={submissions} required onChange={changeSubmissions}/>
                
            </div>
            </div>
            
            <div style={{display:"flex",justifyContent:"center",margin:20}}>
               
             <Button variant="contained" onClick={
             async()=>{
              if(title=="" || description=="" || input=="" || output=="" || submissions=="" || difficulty=="" || shortdes=="" || exampleInput=="" || exampleOutput=="" || testCaseInput=="" || testCaseOutput==""){
         alert("Some feilds are empty! Kindly fill them.")
       }
               else{
                const resp =await axios.put(`${API_BASE_URL}/updateproblem/${pid}`,{
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
            const resp=await axios.delete(`${API_BASE_URL}/delete/${pid}`);
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

export default UpdateProblem