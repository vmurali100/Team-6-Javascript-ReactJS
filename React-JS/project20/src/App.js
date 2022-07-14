import logo from './logo.svg';
import './App.css';
 
import User2 from './Components/User2';
import UserDetails2 from './Components/UserDetails2';
import User1 from './Components/User1';
import { UserDetails1 } from './Components/UserDetails1';
 
 

function App() {
  return (
    <div className="App">
        {/* <User1/>
        <UserDetails1/> */}
       <hr/>
       <User2/>
       <UserDetails2/>
       
        
    </div>
  );
}

export default App;
