// import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import NewClickCounter from './Components/NewClickCounter';
import NewHoverCounter from './Components/NewHoverCounter';



function App() {
  return (
    <div className="App">
     {/* <NewHoverCounter/>
     <hr/>
     <NewClickCounter/> */}
     {/* <NewParentComp/> */}

     <Counter render={(count,incrementCount)=> <NewHoverCounter count={count} incrementCount={incrementCount}/>}/>
     <Counter render={(count,incrementCount,decrementcount)=> <NewClickCounter
      count={count}
      incrementCount={incrementCount}
     decrementcount={decrementcount} />}/>
    </div>
  );
}

export default App;
