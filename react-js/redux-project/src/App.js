import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { Testcom } from './store/Testcom';

function App() {
 let count = useSelector ((state)=>state.count)
 let dispatch=useDispatch();
 console.log(count)

const incrementcount=()=>{
  dispatch({type:'INCREMENT'})
 }
const decrementcount=()=>{
  dispatch({type:'DECREMENT'})
 }


  return (
    <div className="App">
      <h2>count:{count}</h2>
      <button onClick={incrementcount}>Increment</button>
      <button onClick={decrementcount}>Decrement</button>
      <hr/>
      <Testcom/>

     

    </div>
  );
}

export default App;
