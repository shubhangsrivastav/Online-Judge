import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom" 
import backgroundImage from "./photo/background.jpg"
import Register from "./components/register"
import Signin from './components/signin';
import ProblemSet from './components/problemSet';
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
        <Route path ="/" element={<Register />} />
        <Route path ="/signin" element={<Signin />} />
        <Route path ="/problemSet" element={<ProblemSet />} />
        {/* <Route path ="/userlanding" element={<UserLanding />} /> */}
        
     </Routes>
    </Router>
    </div>
  )
}

export default App
