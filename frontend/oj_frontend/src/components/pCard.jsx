import axios from "axios";
import  "./pCard.css"
import { useNavigate } from "react-router-dom";
function Card(props){
const link=`/problem/${props.pid}`
const navigate=useNavigate();
return ( <>

<div class="card m-2 cb1 text-center" >

  <div class="card-body">
    <h2 class="card-title mb-4">{props.title}</h2>
    <p class="card-text">{props.sdes}</p>
    <h6>Difficulty:{props.difficulty}</h6>
    <div >
    <a href="#" onClick={()=>{navigate(link)}} class="btn btn-outline-light">Solve</a>
    
    <h5>Submissions:{props.submissions}</h5>
    </div>
  </div>
</div>

    </>
)
}
export default Card