import logo from './logo.svg';
import './App.css';
import { DeepthiComp } from './Components/DeepthiComp';
import { Vishnu } from './Components/Vishnu';
import { CommonClass } from './Class components/CommonClass';
import { Class1 } from './Class components/Class1';

function App() {
  return (
    <div className="App">
     {/* <DeepthiComp></DeepthiComp> */}
     {/* <Vishnu></Vishnu> */}
     <CommonClass/>
    </div>
  );
}

export default App;
