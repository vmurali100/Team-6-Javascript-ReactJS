import './App.css';
import ClickCounter from './Components/ClickCounter';
import ClickCounter1 from './Components/ClickCounter1';
import ClickCounter2 from './Components/ClickCounter2';
import ClickCounter3 from './Components/ClickCounter3';
import { ClickCounter4 } from './Components/ClickCounter4';
import HoverCount from './Components/HoverCount';
import HoverCount1 from './Components/HoverCount1';
import HoverCount2 from './Components/HoverCount2';
import HoverCount3 from './Components/HoverCount3';
import { HoverCount4 } from './Components/HoverCount4';

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
      {/* <ClickCounter3/>
      <hr/>
      <HoverCount3/> */}
      <ClickCounter4/>
      <hr/>
      <HoverCount4/>
    </div>
  );
}

export default App;
