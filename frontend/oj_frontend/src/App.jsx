import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom" 
import backgroundImage from "./photo/background.jpg"
import Register from "./components/register"
import ProblemSet from './components/problemSet';
import Signin from './components/signin';
import Navbar from "./components/navbar";
import Card from './components/pCard';
import ParticularProblem from './components/particularproblem';
import AddContest from './components/addContest';
import AddProblem from './components/addProblem';
import {RecoilRoot} from "recoil"
import Submission from './components/submission';
function App() {
  
  return (
    <div className="App">
     <RecoilRoot>
      <Router>
   
      <Routes>
        <Route path ="/" element={<Signin />} />
        <Route path ="/register" element={<Register />} />
        <Route path ="/problemSet" element={<ProblemSet />} />
        <Route path ="/navbar" element={<Navbar />} />
        <Route path ="card" element={<Card />} />
        <Route path ="/problem/:pid" element={<ParticularProblem />} />
        <Route path ="/addproblem" element={<AddProblem />} />
        <Route path ="/addcontest" element={<AddContest />} />
        <Route path ="/submission" element={<Submission />} />


        
       
        
     </Routes>
    </Router>
    </RecoilRoot>
    </div>
  )
}

export default App
