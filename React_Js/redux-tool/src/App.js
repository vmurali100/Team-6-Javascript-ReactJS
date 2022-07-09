import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/index1';

function App() {
  const count = useSelector((state) => state.counter)
  // console.log(count)
  const {incrementcount,decrementcount,addby}=actions
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementcount())
  }
  const handleDecrement = () => {
    dispatch(decrementcount())
  }
  const handleAddby = () => {
    dispatch(addby(5))
  }
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleAddby}>addby</button>
    </div>
  );
}

export default App;
