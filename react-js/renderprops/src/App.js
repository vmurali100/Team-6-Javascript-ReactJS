import logo from './logo.svg';
import './App.css';
import Newhovercounter from './Component/Newhovercounter';
import Newclickcounter from './Component/Newclickcounter';
import Newparentcomp from './Component/Newparentcomp';
import Counter from './Component/Counter';
import Counter1 from './Component/Counter1';
import Newclick1 from './Component/Newclick1';
import Newhover1 from './Component/Newhover1';
import Counter2 from './Component/Counter2';
import Newhover2 from './Component/Newhover2';
import Newclick2 from './Component/Newclick2';
import Counter3 from './Component/Counter3';
import Newclick3 from './Component/Newclick3';
import Newhover3 from './Component/Newhover3';
import Counter4 from './Component/Counter4';
import Newclick4 from './Component/Newclick4';
import Newhover4 from './Component/Newhover4';
import Newclick from './Component/Newclick';
import Newhover from './Component/Newhover';
import Count from './Component/Count';
import Hovercountcomp from './Component/Hovercountcomp';
import Clickcountcomp from './Component/Clickcountcomp';
import Countercomp from './Component/Countercomp';

function App() {
  return (
    <div className="App">
      {/* <Newhovercounter/>
      <hr/>
      <Newclickcounter/> */}

      {/* <Newparentcomp/> */}

      {/* <Counter render={(count,incrementcount)=> <Newhovercounter count={count} incrementcount={incrementcount}/>}/>
      <Counter render={(count,incrementcount)=> <Newclickcounter count={count} incrementcount={incrementcount}/>}/> */}

      {/* <Counter1 render={(count,incrementcount)=> <Newclick1 count={count} incrementcount={incrementcount}/>}/>
      <Counter1 render={(count,incrementcount)=> <Newhover1 count={count} incrementcount={incrementcount}/>}/> */}

      {/* <Counter2 render={(count,decrementcount)=> <Newhover2 count={count} decrementcount={decrementcount}/>}/>
      <Counter2 render={(count,decrementcount)=> <Newclick2 count={count} decrementcount={decrementcount}/>}/> */}
      
      {/* <Counter3 render={(count,incrementcount)=> <Newclick3 count={count} incrementcount={incrementcount} />}/>
      <Counter3 render={(count,incrementcount)=> <Newhover3 count={count} incrementcount={incrementcount}/>}/> */}

      {/* <Counter4 render={(count,incrementcount)=> <Newclick4 count={count} incrementcount={incrementcount}/>}/>
      <Counter4 render={(count,incrementcount)=> <Newhover4 count={count} incrementcount={incrementcount}/>}/> */}
      
      {/* <Newclick/>
      <hr/>
      <Newhover/> */}
      {/* <Count render={(count,incrementcount)=> <Newhover count={count} incrementcount={incrementcount}/>}/> */}
      
      {/* <Hovercountcomp/>
      <hr/>
      <Clickcountcomp/> */}

      <Countercomp render={(count,incrementcount)=> <Clickcountcomp count={count} incrementcount={incrementcount}/>}/>
      <Countercomp render={(count,incrementcount)=> <Hovercountcomp count={count} incrementcount={incrementcount}/>}/>
    </div>
  );
}

export default App;
