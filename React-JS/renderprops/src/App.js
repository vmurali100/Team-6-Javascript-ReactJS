import logo from './logo.svg';
import './App.css';
import NewHoverCounter from './Component/NewHoverCounter';
import NewClickCounter from './Component/NewClickCounter';
import Counter from './Component/Counter';
import NewClickCounter1 from './Component1/NewClickCounter1';
import Counter1 from './Component1/Counter1';
import NewHoverCounter1 from './Component1/NewHoverCounter1';
import Counter2 from './Component2/Counter2';
import NewClickCounter2 from './Component2/NewClickCounter2';
import NewHoverCounter2 from './Component2/NewHoverCounter2';
import Counter3 from './Component3/Counter3';
import NewClickCounter3 from './Component3/NewClickCounter3';
import NewHoverCounter3 from './Component3/NewHoverCounter3';
import Counter4 from './Component4/Counter4';
import NewClickCounter4 from './Component4/NewClickCounter4';
import NewHoverCounter4 from './Component4/NewHoverCounter4';
import Counter5 from './Component5/Counter5';
import NewClickCounter5 from './Component5/NewClickCounter5';
import NewHoverCounter5 from './Component5/NewHoverCounter5';

function App() {
  return (
    <div className="App">
  
      {/* <Counter render={(count,incrementcounter,reductioncounter)=> <NewHoverCounter 
      count={count} 
      incrementcounter={incrementcounter} 
      reductioncounter={reductioncounter}/>}/>

      <Counter render={(count,incrementcounter,reductioncounter)=>{return <NewClickCounter
       count={count} 
       incrementcounter={incrementcounter} 
       reductioncounter={reductioncounter}/>}}/> */}
       
       {/* <Counter1 render={(count,IncrementCounter,Reductioncounter)=><NewClickCounter1 
       count={count} 
       IncrementCounter={IncrementCounter} 
       Reductioncounter={Reductioncounter}/>}/>
       <Counter1 render={(count,IncrementCounter,Reductioncounter)=><NewHoverCounter1
       count={count}
       IncrementCounter={IncrementCounter}
       Reductioncounter={Reductioncounter}/>}/> */}

      {/* <Counter2 render={(count,incrementcounter,reductioncounter)=> <NewClickCounter2 count={count} incrementcounter={incrementcounter} reductioncounter={reductioncounter}/>}/>
      <Counter2 render={(count,incrementcounter,reductioncounter)=><NewHoverCounter2 count={count} incrementcounter={incrementcounter} reductioncounter={reductioncounter}/>}/> */}

      {/* <Counter3 render={(count,incrementfun,reductionfun)=><NewClickCounter3 count={count} incrementfun={incrementfun} reductionfun={reductionfun}/>}/>
      <Counter3 render={(count,incrementfun,reductionfun)=><NewHoverCounter3 count={count} incrementfun={incrementfun} reductionfun={reductionfun}/>}/> */}

     <Counter4 render={(count,incrementfun)=><NewClickCounter4 count={count} incrementfun={incrementfun}/>}/>
     <Counter4 render={(count,incrementfun)=><NewHoverCounter4 count={count} incrementfun={incrementfun}/>}/>

      {/* <Counter5 render={(count,incrementcounter)=><NewClickCounter5 count={count} incrementcounter={incrementcounter}/>}/>
      <Counter5 render={(count,incrementcounter)=><NewHoverCounter5 count={count} incrementcounter={incrementcounter}/>}/> */}
    </div>
  );
}

export default App;
