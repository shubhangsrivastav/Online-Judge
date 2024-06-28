import "./card2.css"
function Card2(props){
return <>
<div class="card m-2 cb1 text-center" >

<div class="card-body">
  <h2 class="card-title mb-4">{props.title}</h2>
  <h6>Difficulty:{props.difficulty}</h6>
  <p class="card-text">{props.description}</p>
  <div >
  <p > input:{props.input}</p>
  <p > output:{props.output}</p>
  </div>
</div>
</div>

</>
}
export default Card2