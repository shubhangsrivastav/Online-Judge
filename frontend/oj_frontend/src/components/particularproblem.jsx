import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Card2 from "./card2";
import "./editor.css"
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import Button from "@mui/material/Button";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import { useRecoilValue } from "recoil";
import { userNameState } from "../store/atom/username";
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL
const COMPILER_URL=import.meta.env.VITE_COMPILER_BASE_URL

function ParticularProblem() {
  const userName=useRecoilValue(userNameState);
  const { pid } = useParams();
  const [code, setCode] = useState(`
    Your Code goes here!`);
    const [verdict,setVerdict]=useState("");
  // console.log(pid);
  let [problem, setProblem] = useState();
  let [output,setOutput]=useState("");
  let [testCaseInput,setTestCaseInput]=useState("");
  let [runStatus,setRunStatus]=useState("");
  useEffect(() => {
    axios.get(`${API_BASE_URL}/currentproblem/${pid}`).then((res) => {
      setProblem(res.data.problem);
      // console.log(res.data.problem);
    });
  }, []);
  if (!problem) {
    return <>loading</>;
  }
  const changeInput=(e)=>{
    setTestCaseInput(e.target.value);
  }
  // console.log(code);
  const handleRun = async () => {
    try {
      setRunStatus("");
      if(userName!==undefined){
      setVerdict("");
      // console.log(testCaseInput);
      const { data } = await axios.post(`${COMPILER_URL}/run`, {
        language: "cpp",
        code,
        testCaseInput
      });
      // console.log(data.output);
      setOutput(data.output);}
      else{
        alert("Please Signin!");
      }
    } catch (error) {
      console.error({message:error});
      setRunStatus("1");
    }
  };
  const handleSubmit=async()=>{
    try {
      setRunStatus("");
      if(userName!==undefined){
     const {data}= await axios.post(`${COMPILER_URL}/submit/${pid}`,{code,language:"cpp",userName});
    //  console.log(data);
     setVerdict(data.message);}
     else{
      alert("Please Signin!");
     }
    } catch (error) {
      console.error(error);
      setRunStatus("1");
    }
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="pcode"style={{ display: "flex" ,justifyContent:"space-between",alignItems:"center",margin:0}}>
        <div style={{marginRight:0,marginTop:-80,width:550}} >
        
          <Card2
            title={problem.title}
            description={problem.description}
            submissions={problem.submissions}
            difficulty={problem.difficulty}
            input={problem.input}
            output={problem.output}
            exampleInput={problem.exampleInput}
            exampleOutput={problem.exampleOutput}
          ></Card2>
        </div>
        <div className="card-editor">
            <div style={{display:"flex",alignItems:"center"}}>
            <p style={{marginLeft:-200,marginRight:100,color:"orange"}}>Language</p>
          <select name="dropdown" className="dropdown">
            <option value="c++">C++</option>
            <option value="c">C</option>
            <option value="py">Python</option>
            <option value="javascript">Javascript</option>
          </select>
          </div>
          <div className="editor">
            <CodeMirror
              value={code}
              height="400px"
              width="700px"
              theme={vscodeDark}
              onChange={(code) => setCode(code)}
            />
          </div>
          <div style={{display:"flex",justifyContent:"space-between",width:700,margin:20}}>
          <input className="input" onChange={changeInput} type="text" placeholder="input" />
          <div className="input">
          {output}
          </div>
          </div>
          <div className="button-container" >
          <a href="#" onClick={handleRun} class="action_btn-editor">Run</a>
          <a href="#" onClick={handleSubmit}class="action_btn-editor">Submit</a>
          
        </div>
        {runStatus==="1" && (
        <div className="runStatus" >
          <p style={{color:"orange",fontWeight:"bold",marginLeft:20}}>Compilation Error</p>
          
          
        </div>)
}
        {verdict !== "" && (
        <div className="verdict" >
          Verdict :  { verdict==="Accepted" && <p style={{color:"lightgreen",fontWeight:"bold",marginLeft:20}}>{verdict}</p>
          } 
          { verdict!=="Accepted" && <p style={{color:"red",fontWeight:"bold",marginLeft:20}}>{verdict}</p>
          } 
        </div>
      )}
      
        
         
        </div>
      </div>
    </>
  );
}
export default ParticularProblem;
