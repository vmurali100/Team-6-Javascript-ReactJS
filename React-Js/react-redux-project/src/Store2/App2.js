
import { useDispatch, useSelector } from 'react-redux';
import { Testcomp2 } from './Testcomp2';

function App2() {
  let count = useSelector((state) => state.count);
  let dispatch = useDispatch();
  console.log(count);

  const incrementCount = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const decrementCount = () => {
    dispatch({ type: 'DECREMENT' })
  }
  return (
    <div className="App">
      <h2>Count : {count}</h2>
      <button onClick={incrementCount}>Increase</button>
      <button onClick={decrementCount}>Decrease</button>
      <hr />
      <Testcomp2/>
    </div>
  );
}

export default App2;
