import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from './store'

function App() {
  const count = useSelector((state)=>state.counter);
  const {incrementcount,decrementcount,addBy} = actions
  const dispatch = useDispatch();
  console.log(count)
  const handleIncrement=()=>{
    dispatch(incrementcount())
  }
  const handleDecrement=()=>{
    dispatch(decrementcount())
  }
  const handleAddBy=()=>{
    dispatch(addBy(5))
  }
  return (
    <div className="App">
       <h1>On Click Method</h1>
       <h2>{count}</h2>
       <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
       <button onClick={handleAddBy}>AddBy</button>
       <hr/>
       <h1>On MouseOver Method</h1>
       <h2>{count}</h2>
       <button onMouseOver={handleIncrement}>Increment</button>
       <button onMouseOver={handleDecrement}>Decrement</button>
       <button onMouseOver={handleAddBy}>AddBy</button>
    </div>
  );
}
export default App;
