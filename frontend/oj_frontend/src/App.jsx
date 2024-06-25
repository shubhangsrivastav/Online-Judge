import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom" 
import backgroundImage from "./photo/background.jpg"
import Register from "./components/register"
import ProblemSet from './components/problemSet';
import Signin from './components/signin';
import Navbar from "./components/navbar";
function App() {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
    height: '100vh',
    margin: '0'
};
  return (
    <div style={appStyle}>
      <Router>
   
      <Routes>
        <Route path ="/" element={<Signin />} />
        <Route path ="/register" element={<Register />} />
        <Route path ="/problemSet" element={<ProblemSet />} />
        <Route path ="/navbar" element={<Navbar />} />

        
       
        
     </Routes>
    </Router>
    </div>
  )
}

export default App
