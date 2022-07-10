import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store'

function App() {
  const count = useSelector((state) => state.counter);
  const { incrementCount, decrementCount, addBy } = actions
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount())
  }
  const handleDecrement = () => {
    dispatch(decrementCount())
  }
  const handleAddby = () => {
    dispatch(addBy(5))
  }
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={handleIncrement}>IncrementCount</button>
      <button onClick={handleDecrement}>DecrementCount</button>
      <button onClick={handleAddby}>Add By</button>
    </div>
  );
}

export default App;
