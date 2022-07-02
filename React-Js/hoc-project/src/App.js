import './App.css';
import ClickCounter from './Components/ClickCounter';
import ClickCounter1 from './Components/ClickCounter1';
import HoverCount from './Components/HoverCount';
import HoverCount1 from './Components/HoverCount1';

function App() {
  return (
    <div className="App">
      {/* <HoverCount/>
      <hr/>
      <ClickCounter/> */}
      <ClickCounter1/>
      <hr/>
      <HoverCount1/>
    </div>
  );
}

export default App;
