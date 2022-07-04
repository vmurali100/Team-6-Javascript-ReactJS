import logo from './logo.svg';
import './App.css';
import NewHoverCounter from './Components/NewHoverCounter';
import NewClickCounter from './Components/NewClickCounter';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      {/* <NewHoverCounter/>
       <hr/>
       <NewClickCounter/> */}
      <Counter render={(count, Incrementcount, DecrementCount) =>
        <NewHoverCounter
          count={count}
          Incrementcount={Incrementcount}
          DecrementCount={DecrementCount} />} />

      <Counter render={(count, Incrementcount, DecrementCount) =>
        <NewClickCounter
          count={count}
          Incrementcount={Incrementcount}
          DecrementCount={DecrementCount} />} />
    </div>
  );
}

export default App;
