
import "./card2.css"
function Card2(props){
return <>
<div class="card m-2 cb1 " >

<div class="card-body">
  <h2 class="card-title mb-4">{props.title}:</h2>
  <div style={{display:"flex",justifyContent:"flex-end"}}>
  <h6 className="heading" >Difficulty:{props.difficulty}</h6>
  </div>
  <br />
  <p class="card-text">{props.description}</p>
  <div >
    <h4>INPUT</h4>
  <p > {props.input}</p>
  <br />
  <h4>OUTPUT</h4>
  <p > {props.output}</p>
  <h4>EXAMPLE</h4>
  <p > input: {props.exampleInput}</p>
  <br />
  <p > output: {props.exampleOutput}</p>
  
  </div>
</div>
</div>

</>
}
export default Card2