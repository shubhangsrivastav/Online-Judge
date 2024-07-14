import { useNavigate } from "react-router-dom";
import "./CardAdmin.css"
function CardAdmin(props) {
    const link=`/problem/${props.pid}`
    const link2=`/updateProblem/${props.pid}`;
const navigate=useNavigate();
return ( <>

<div class="carda m-2 cb1a text-center" style={{overflowY:"auto",overflowX:"auto"}} >

  <div class="card-bodya" >
    <h2 class="card-titlea mb-4a">{props.title}</h2>
    <p class="card-texta">{props.sdes}</p>
    <h6 class="difficulty">Difficulty:{props.difficulty}</h6>
    <div >
    <a href="#" onClick={()=>{navigate(link)}} class="btn btn-outline-light">Solve</a>
    <a href="#" onClick={()=>{navigate(link2)}} class="btn btn-outline-light" style={{marginLeft:10}}>Update</a>
    
    <h5>Submissions:{props.submissions}</h5>
    <h7>ID: {props.pid}</h7>
    </div>
  </div>
</div>

    </>
)
}
export default CardAdmin