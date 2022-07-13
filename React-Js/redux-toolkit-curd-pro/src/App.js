import logo from './logo.svg';
import './App.css';
import { User } from './Components/User';
import { Userstable } from './Components/Userstable';

function App() {
  return (
    <div className="App">
      <User/>
      <hr></hr>
      <Userstable/>
    </div>
  );
}

export default App;
