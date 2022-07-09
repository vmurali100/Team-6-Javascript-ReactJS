import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from './store'

function App() {
  const count=useSelector((state)=>state.counter);
  const{increment,decrement,addBy}=actions
  const dispatch=useDispatch()

  const handleIncrement=()=>{
    dispatch(increment())
  }
  const handleDecrement=()=>{
    dispatch(decrement())
  }
  const handleaddBy=()=>{
    dispatch(addBy(5))
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleaddBy}>Add By</button>
    </div>
  );
}

export default App;
