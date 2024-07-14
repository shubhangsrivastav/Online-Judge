import { useNavigate } from "react-router-dom";
import "./CardOa.css"
import { useSetRecoilState } from "recoil";
import { minState } from "../store/atom/min";
import { secState } from "../store/atom/sec";
function CardOa(props){
    const navigate=useNavigate();
    const link=`/particularOa/${props.oaid}`;
    const setMin=useSetRecoilState(minState);
    const setSec=useSetRecoilState(secState);
return (
    <>
   
    <div class="cardoa m-2 cb1oa text-center" >

  <div class="card-bodyoa">
    <h2 class="card-titleoa mb-4oa">{props.company}</h2>
    <p class="card-textoa">{props.noOfQues} Questions</p>
    <h6 class="difficulty">Time Duration: {props.timeDuration}</h6>
    <div >
    <a href="#" onClick={()=>{
      setMin(props.timeDuration);
      setSec(0);
        navigate(link);
    }} class="btn btn-outline-light">Start Quiz</a>
    
    <h5>Attempts :{props.givenBy}</h5>
    </div>
  </div>
</div>
    </>
)
}
export default CardOa;