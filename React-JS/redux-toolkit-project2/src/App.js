import logo from './logo.svg';
import './App.css';
import { User } from './Component/User';
import UserDetails from './Component/UserDetails';

function App() {
  return (
    <div className="App">
    <User/>
    <UserDetails/>
    </div>
  );
}

export default App;
