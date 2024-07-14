import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom" 
import backgroundImage from "./photo/background.jpg"
import Register from "./components/register"
import ProblemSet from './components/problemSet';
import Signin from './components/signin';
import Navbar from "./components/navbar";
import Card from './components/pCard';
import ParticularProblem from './components/particularproblem';
import UpdateProblem from './components/updateProblem';
import AddProblem from './components/addProblem';
import {RecoilRoot} from "recoil"
import Submission from './components/submission';
import Oa from './components/oapractice';
import CardOa from './components/CardOa';
import ParticularOa from './components/particularOa';
import Clock from './components/clock';
import Oaparticularproblem from './components/oaparticularporblem';
import AddOa from './components/addoa';

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
        <Route path ="/updateProblem/:pid" element={<UpdateProblem />} />
        <Route path ="/submission" element={<Submission />} />
        <Route path ="/oapractice" element={<Oa />} />
        <Route path ="/CardOa" element={<CardOa />} />
        <Route path ="/particularOa/:oaid" element={<ParticularOa />} />
        <Route path ="/clock" element={<Clock />} />
        <Route path ="/oaparticularproblem/:pid" element={<Oaparticularproblem />} />
        <Route path ="/addoa" element={<AddOa />} />

        
       

        
       
        
     </Routes>
    </Router>
    </RecoilRoot>
    </div>
  )
}

export default App
