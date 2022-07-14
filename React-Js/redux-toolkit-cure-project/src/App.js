import logo from './logo.svg';
import './App.css';
import { Users } from './Components/Users';
import { UsersDetails } from './Components/UsersDetails';

function App() {
  return (
    <div className="App">
      <Users/>
      <hr/>
      <UsersDetails/>
    </div>
  );
}

export default App;
