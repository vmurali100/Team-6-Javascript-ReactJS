import logo from './logo.svg';
import './App.css';
import ClickCounter from './Hoc/ClickCounter';
import HoverCounter from './Hoc/HoverCounter';
import Click from './HOC1/Click';
import Hover from './HOC1/Hover';
 

function App() {
  return (
    <div className="App">
       {/* <ClickCounter/>
       <hr/>
       <HoverCount/> */}
       {/* <HoverCount/>
       <hr/>
       <ClickCounter/> */}
        {/* <ClickCounter/>
        <hr/>
        <HoverCounter/> */}
        {/* <Click/>
        <hr/>
         <Hover/> */}
         {/* <HOC1/> */}
         <Hover/>
         <hr/>
         <Click/>
    </div>
  );
}

export default App;
