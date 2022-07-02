import logo from './logo.svg';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCount from './Components/HoverCount';
import ClickCounter1 from './Components1/ClickCounter1';
import HoverCount1 from './Components1/HoverCount1';
import ClickCounter2 from './Components2/ClickCounter2';
import HoverCount2 from './Components2/HoverCount2';
import ClickCounter3 from './Components3/ClickCounter3';
import HoverCount3 from './Components3/HoverCount3';

function App() {
  return (
    <div className="App">
      {/* <HoverCount/>
      <hr/>
      <ClickCounter/> */}

      {/* <ClickCounter1/>
      <hr/>
      <HoverCount1/> */}

      {/* <ClickCounter2/>
      <hr/>
      <HoverCount2/> */}

      <ClickCounter3/>
      <hr/>
      <HoverCount3/>
    </div>
  );
}

export default App;
