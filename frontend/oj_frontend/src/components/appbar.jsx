import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
function Appbar(){
    const navigate=useNavigate();
return (
    <div style={{
        display:'flex',
        justifyContent:'space-between',
        color:'white',
        paddingTop:30
    }}>
        <div style={{paddingLeft:20}}>
            
            <Typography variant="h3" gutterBottom>
        Codify
      </Typography>
          
        </div>
        <div style={{display:'flex'}}>
        <div style={{marginRight:40}}>
            <Typography variant="h5" gutterBottom>
        Contest
      </Typography>
      </div>
        <div>
            <Typography variant="h5" gutterBottom>
        Problem
      </Typography>
      </div>
        
      
        </div>
        <div>
            <div style={{paddingRight:40,
                hover:true
            }}>
             <Button variant="text">Signup</Button>
            </div>
        </div>
    </div>
)
}
export default Appbar
