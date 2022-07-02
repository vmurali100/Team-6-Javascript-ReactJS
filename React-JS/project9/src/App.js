import logo from './logo.svg';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCount from './Components/HoverCount';

function App() {
  return (
    <div className="App">
       {/* <ClickCounter/>
       <hr/>
       <HoverCount/> */}
       <HoverCount/>
       <hr/>
       <ClickCounter/>
    </div>
  );
}

export default App;
