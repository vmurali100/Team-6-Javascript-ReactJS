import logo from './logo.svg';
import './App.css';
import NewHoverCounter from './Components/NewHoverCounter';
import NewClickCounter from './Components/NewClickCounter';
import NewParentComp from './Components/NewParentComp';
import Counters from './Components/Counters';
import HoverCount1 from './Components1/HoverCount1';
import ClickCount1 from './Components1/ClickCount1';
import Counter1 from './Components1/Counter1';
import HoverCounter2 from './Components2/HoverCounter2';
import ClickCounter2 from './Components2/ClickCounter2';
import Counter2 from './Components2/Counter2';
import HoverCounter3 from './Components3/HoverCounter3';
import ClickCounter3 from './Components3/ClickCounter3';
import Counter3 from './Components3/Counter3';

function App() {
  return (
    <div className="App">
      {/* <NewHoverCounter/>
      <hr/>
      <NewClickCounter/> */}
       {/* <NewParentComp/> */}

       {/* <Counters render={(count,incrementCount,decrementCount)=><NewHoverCounter 
       count={count} 
       incrementCount={incrementCount}
       decrementCount={decrementCount}/>}/>
       
       
       <Counters render ={(count,incrementCount,decrementCount)=><NewClickCounter count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}/>}/> */}

        {/* <HoverCount1/>
        <hr/>
        <ClickCount1/> */}
        {/* <Counter1 Sai={(count,incrementCount,decrementCount)=><HoverCount1 count={count} incrementCount={incrementCount} decrementCount={decrementCount}/>}/>

        <Counter1 Sai={(count,incrementCount,decrementCount)=><ClickCount1 count={count} incrementCount={incrementCount} decrementCount={decrementCount}/>}/> */}
   
        {/* <HoverCounter2/>
        <hr/>
        <ClickCounter2/> */}
        {/* <Counter2 Raju={(count,IncrementCount,DecrementCount)=><HoverCounter2 count={count} IncrementCount={IncrementCount} DecrementCount={DecrementCount}/>}/>
        <Counter2 Raju={(count,IncrementCount,DecrementCount)=><ClickCounter2 count={count} IncrementCount={IncrementCount} DecrementCount={DecrementCount}/>}/> */}
        
        {/* <HoverCounter3/>
        <hr/>
        <ClickCounter3/> */}

        <Counter3 Dheena={(count,IncrementCount,DecrementCount)=> <HoverCounter3 count={count} IncrementCount={IncrementCount} DecrementCount={DecrementCount}/>}/>

        <Counter3 Dheena={(count,IncrementCount,DecrementCount)=> <ClickCounter3 count={count} IncrementCount={IncrementCount} DecrementCount={DecrementCount}/>}/>
    </div>
  );
}

export default App;
