import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { TextComp } from './Store/TextComp';
import StateComp from './Store/StateComp';

function App() {

  return (
    <div className="App">
      <StateComp />
      <hr />
      <TextComp/>
    </div>
  );
}

export default App;
