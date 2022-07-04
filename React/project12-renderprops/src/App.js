import logo from './logo.svg';
import './App.css';
import Newhovercount from './components/Newhovercount';
import Newclickcounter from './components/Newclickcounter';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Newhovercount/>
      <Newclickcounter/> */}
      <Counter render={(count,incrementcount)=> <Newhovercount count={count} incrementcount={incrementcount}/> }/>
      <Counter render={(count,incrementcount,decrementcount)=> <Newclickcounter count={count}  incrementcount={incrementcount} decrementcount={decrementcount}/> }/>
    </div>
  );
}

export default App;
