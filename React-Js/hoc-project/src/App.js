import './App.css';
import ClickCounter from './Components/ClickCounter';
import ClickCounter1 from './Components/ClickCounter1';
import ClickCounter2 from './Components/ClickCounter2';
import HoverCount from './Components/HoverCount';
import HoverCount1 from './Components/HoverCount1';
import HoverCount2 from './Components/HoverCount2';

function App() {
  return (
    <div className="App">
      {/* <HoverCount/>
      <hr/>
      <ClickCounter/> */}
      {/* <ClickCounter1/>
      <hr/>
      <HoverCount1/> */}
      <ClickCounter2/>
      <hr/>
      <HoverCount2/>
    </div>
  );
}

export default App;
