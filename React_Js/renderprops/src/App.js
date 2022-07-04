
import './App.css';
import Hover1 from './Components/Hover1';
import Click1 from './Components/Click1';
import Counter1 from './Components/Counter1';

function App() {
  return (
    <div className="App">
     {/* <Hover1/>
     <hr/>
     <Click1/> */}
     <Counter1 render={(count,increment)=><Hover1 count={count} increment={increment}/>}/>
     <Counter1 render={(count,increment,decrement)=><Click1 count={count} increment={increment} decrement={decrement}/>}/>
    </div>
  );
}

export default App;
