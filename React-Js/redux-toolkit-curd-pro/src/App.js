import logo from './logo.svg';
import './App.css';
import { User } from './Components/User';
import { Userstable } from './Components/Userstable';
import { Users1 } from './Components/Users1';
import { UsersDetails1 } from './Components/UsersDetails1';
import { Users2 } from './Components/Users2';
import { UsersDetails2 } from './Components/UsersDetails2';

function App() {
  return (
    <div className="App">
      {/* <User/>
      <hr></hr>
      <Userstable/> */}
      
      {/* <Users1/>
      <hr/>
      <UsersDetails1/> */}

      <Users2/>
      <hr/>
      <UsersDetails2/>
    </div>
  );
}

export default App;
