import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { actoins } from "./Store"

function App() {
  const count = useSelector((state) => state.counter);
  const { incrementcount, decrementcount, AddBy } = actoins
  const dispatch = useDispatch();
  // console.log(count)
  const handleincrement = () => {
    dispatch(incrementcount())
  }
  const handledecrement = () => {
    dispatch(decrementcount())
  }
  const handleAddBy = () => {
    dispatch(AddBy(5))
  }
  return (
    <div className="App">
      <h1>onclick method</h1>
      <h2>{count}</h2>
      <button onClick={handleincrement}>increment</button>
      <button onClick={handledecrement}>decrement</button>
      <button onClick={handleAddBy}>AddBy</button>
      <hr />
      <h1>onmouse hover method</h1>
      <h2>{count}</h2>
      <button onMouseOver={handleincrement}>Increment</button>
      <button onMouseOver={handledecrement}>Decrement</button>
      <button onMouseOver={handleAddBy}>AddBy</button>


    </div>
  );
}

export default App;
