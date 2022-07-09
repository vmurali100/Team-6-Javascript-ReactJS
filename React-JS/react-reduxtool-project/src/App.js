import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {actions} from './store'

function App() {
  const count = useSelector ((state)=>state.counter)
  const {incrementcount,decrementcount,addBy} =actions

  const dispatch = useDispatch()
  

  const handleIncrement = () =>{
    dispatch(incrementcount())
  }
  const handleDecrement = () =>{
    dispatch(decrementcount())
  }
  const handleaddBy = () =>{
    dispatch(addBy(5))
  }

  console.log(count)
  return (
    <div className="App">
     <h2>{count}</h2>
     <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>
     <button onClick={handleaddBy}>addby</button>
    </div>
  );
}

export default App;
