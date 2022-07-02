import logo from './logo.svg';
import './App.css';
import Clickcounter from './Components/Clickcounter';
import Hovercount from './Components/Hovercount';
import { HOCcomponent } from './Components/HOCcomponent';
import Clickcount1 from './Components/Clickcount1';
import Hovercount1 from './Components/Hovercount1';
import Clickcount2 from './Components/Clickcount2';
import Hovercount2 from './Components/Hovercount2';





function App() {
  return (
    <div className="App">
      {/* 
      <Hovercount />
      <hr />
      <Clickcounter/> */}
 
      {/* <Clickcount1/>
      <Hovercount1/> */}

      <Clickcount2/>
      <Hovercount2/>
    </div>
  );
}

export default App;
