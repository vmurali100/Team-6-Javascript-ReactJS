import logo from './logo.svg';
import './App.css';
import { User } from './Components/User';
import { Userstable } from './Components/Userstable';
import { Users1 } from './Components/Users1';
import { UsersDetails1 } from './Components/UsersDetails1';

function App() {
  return (
    <div className="App">
      {/* <User/>
      <hr></hr>
      <Userstable/> */}
      <Users1/>
      <hr/>
      <UsersDetails1/>
    </div>
  );
}

export default App;
