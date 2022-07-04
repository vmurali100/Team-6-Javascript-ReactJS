
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
import Hover4 from './Components/Hover4';
import Click4 from './Components/Click4';
import Counter4 from './Components/Counter4';
import Hover5 from './Components/Hover5';
import Click5 from './Components/Click5';
import Counter5 from './Components/Counter5';

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
     {/* <Counter3 render={(count,increment)=><Hover3 count={count} increment={increment}/>}/>
     <Counter3 render={(count,increment,decrement)=><Click3 count={count} increment={increment} decrement={decrement}/>}/> */}
     {/* <Hover4/>
     <Click4/> */}
     {/* <Counter4 render={(count,increment)=><Hover4 count={count} increment={increment}/>}/>
     <Counter4 render={(count,increment,decrement)=><Click4 count={count} increment={increment} decrement={decrement}/>}/> */}
    {/* <Hover5/>
    <Click5/> */}
    <Counter5 render={(count,increment)=><Hover5 count={count} increment={increment} />}/>
    <Counter5 render={(count,increment,decrement)=><Click5 count={count} increment={increment} decrement={decrement} />}/>
    </div>
  );
}

export default App;
