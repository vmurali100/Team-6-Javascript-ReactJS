
import './App.css';
import NewHovercounter from './Components/NewHovercounter';
import NewClickcounter from './Components/NewClickcounter';
import Counter from './Components/Counter';
import { CounterCompenent } from './Components/CounterCompenent';

function App() {
  return (
    <div className="App">
      {/* <NewHovercounter/>
      <hr/>
      <NewClickcounter/> */}
      {/* <Counter render={(count,inCrementCount,decrementCount)=> <NewHovercounter 
      count={count} inCrementCount={inCrementCount} decrementCount={decrementCount} />}/>
      <Counter render={(count,inCrementCount,decrementCount)=>{return <NewClickcounter 
      count={count} 
      inCrementCount={inCrementCount} 
      decrementCount={decrementCount} />}}/>   */}
      <CounterCompenent/>
    </div>
  );
}

export default App;
