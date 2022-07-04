
import './App.css';
import Hover1 from './Components/Hover1';
import Click1 from './Components/Click1';
import Counter1 from './Components/Counter1';
import Hover2 from './Components/Hover2';
import Click2 from './Components/Click2';
import Counter2 from './Components/Counter2';
import Hover3 from './Components/Hover3';
import Click3 from './Components/Click3';
import Counter3 from './Components/Counter3';

function App() {
  return (
    <div className="App">
     {/* <Hover1/>
     <hr/>
     <Click1/> */}
     {/* <Counter1 render={(count,increment)=><Hover1 count={count} increment={increment}/>}/>
     <Counter1 render={(count,increment,decrement)=><Click1 count={count} increment={increment} decrement={decrement}/>}/> */}
     {/* <Hover2/>
     <hr/>
     <Click2/> */}
     {/* <Counter2 render={(count,increment)=> <Hover2 count={count} increment={increment}/>}/>
     <Counter2 render={(count,increment,decrement)=> <Click2 count={count} increment={increment} decrement={decrement}/>}/> */}
     {/* <Hover3/>
     <hr/>
     <Click3/> */}
     <Counter3 render={(count,increment)=><Hover3 count={count} increment={increment}/>}/>
     <Counter3 render={(count,increment,decrement)=><Click3 count={count} increment={increment} decrement={decrement}/>}/>
    </div>
  );
}

export default App;
