import logo from './logo.svg';
import './App.css';
import { Commonsample } from './Class (parent to child)/Commonsample';
import { CommonClass } from './class(child to parent)/CommonClass';

function App() {
  return (
    <div className="App">
      {/* <Commonsample/> */}
      <CommonClass/>
    </div>
  );
}

export default App;
