import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import { HocCompo } from './Components/HocCompo';
import Users from './Components/Users';


function App() {
  return (
    <div className="App">
      <Form/>
      <HocCompo/>
      <Users/>
    </div>
  );
}

export default App;
