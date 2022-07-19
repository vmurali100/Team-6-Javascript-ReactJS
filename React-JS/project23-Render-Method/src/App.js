import logo from './logo.svg';
import './App.css';
import User from './Components/User';
import Form from './Components/Form';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Counter render={(Users) =>
        <Form
          Form={Form}
            />} />
          <hr/>
      <Counter render={(Users) =>
        <User
          Users={Users}
            />} />

      
    </div>
  );
}

export default App;
