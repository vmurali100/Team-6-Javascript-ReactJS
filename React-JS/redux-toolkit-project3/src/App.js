import logo from './logo.svg';
import './App.css';
import { User } from './Components/User';
import { UserDetails } from './Components/UserDetails';


function App() {
  return (
    <div className="App">
      <User />
      <UserDetails />
    </div>
  );
}

export default App;
