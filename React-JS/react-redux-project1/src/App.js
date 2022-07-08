import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { TestCompo } from './store/TestCompo';

function App() {
  let count = useSelector((state) => state.count)

  let dispatch = useDispatch();
  console.log(count)

  const incrementCount = () => {

    dispatch({ type: "INCREMENT" })
  }
  const decrementcount = () => {
    dispatch({ type: "DECREMENT" })

  }
  return (
    <div className="App">
      <h2>count:{count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementcount}>Decrement</button>
      <TestCompo/>
    </div>
  );
}

export default App;
