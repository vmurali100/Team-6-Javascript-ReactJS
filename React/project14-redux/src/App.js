import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
 let count= useSelector((state)=>state.count)
let dispatch= useDispatch()
 console.log(count)
 const incrememtCount=()=>{
  dispatch({type:"INCREMENT"})
 }
 const decrementCount=()=>{
  dispatch({type:"DECREMENT"})
 }
  return (
    <div className="App">
      <h2>count:{count}</h2>
    <button onClick={incrememtCount}>incrememt</button>
    <button onClick={decrementCount}>decrement</button>
    </div>
  );
}

export default App;
