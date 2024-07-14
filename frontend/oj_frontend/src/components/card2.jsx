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
  <p >input: <Spliit example={props.exampleInput}></Spliit> </p>
  <br />
  <p > output: <Spliit example={props.exampleOutput}></Spliit></p>
  
  </div>
</div>
</div>

</>
}

function Spliit(props){
let arr=props.example.split("n");
console.log(arr.length);
console.log(arr);
arr=arr.map((e)=>{
  let x=e.length;
 e=e.slice(0,x-1);
  return e;
}
)
console.log(arr);

return <>
{
  
  arr.map((e)=>{
    return <div>{e}</div>
  }
)
}
</>

}
export default Card2