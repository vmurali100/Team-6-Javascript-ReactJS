import logo from './logo.svg';
import './App.css';
import { Users } from './Components/Users';
import { UsersDetails } from './Components/UsersDetails';
import { Users1 } from './Components/Users1';
import { UsersDetails1 } from './Components/UsersDetails1';

function App() {
  return (
    <div className="App">
      {/* <Users/>
      <hr/>
      <UsersDetails/> */}
      <Users1/>
      <hr/>
      <UsersDetails1/>
    </div>
  );
}

export default App;
