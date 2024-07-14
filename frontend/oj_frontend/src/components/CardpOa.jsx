import axios from "axios";
import  "./pCard.css"
import { useNavigate } from "react-router-dom";
function CardpOa(props){
const link=`/oaparticularproblem/${props.pid}`
const navigate=useNavigate();
return ( <>

<div class="cardp m-2 cb1p text-center" >

  <div class="card-bodyp">
    <h2 class="card-titlep mb-4p">{props.title}</h2>
    <p class="card-textp">{props.sdes}</p>
    <h6 class="difficulty">Difficulty:{props.difficulty}</h6>
    <div >
    <a href="#" onClick={()=>{
      navigate(link)}} class="btn btn-outline-light">Solve</a>
    
    <h5>Submissions:{props.submissions}</h5>
    </div>
  </div>
</div>

    </>
)
}

export default CardpOa