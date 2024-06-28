import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Card2 from "./card2";
function ParticularProblem(){
    const {pid}=useParams();
    console.log(pid);
    let [problem,setProblem]=useState();
    useEffect(()=>{
        axios.get(`http://localhost:3000/currentproblem/${pid}`).then((res)=>{
            setProblem(res.data.problem);
            console.log(res.data.problem);
        })
    },[])
    if(!problem){
        return (
            <>
            loading
            </>
        )
    }
return( <>
<Navbar></Navbar>
<Card2 title={problem.title} description={problem.description} submissions={problem.submissions} difficulty={problem.difficulty} input={problem.input} output={problem.output}></Card2>

</>)
}
export default ParticularProblem
