import logo from './logo.svg';
import './App.css';
import { User } from './Components/User';
import { UsersDetails } from './Components/UsersDetails';

function App() {
  return (
    <div className="App">
      <User/>
      <UsersDetails/>
    </div>
  );
}

export default App;
