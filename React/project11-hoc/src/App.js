import logo from './logo.svg';
import './App.css';
import Clickcounter from './Components/Clickcounter';
import Hovercount from './Components/Hovercount';
import { HOCcomponent } from './Components/HOCcomponent';

function App() {
  return (
    <div className="App">

      <Hovercount />
      <hr />
      <Clickcounter/>
    </div>
  );
}

export default App;
