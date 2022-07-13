
import './App.css';
import User from './component/User';
import Usertable from './component/Usertable';
import Person from './component1/Person';
import Persontable from './component1/Persontable';

function App() {
  return (
    <div className="App">
     {/* <User/>
     <Usertable/> */}
     <Person/>
     <Persontable/>
    </div>
  );
}

export default App;
