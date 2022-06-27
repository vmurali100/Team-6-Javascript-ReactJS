import logo from './logo.svg';
import './App.css';
import { Users } from './functional-components/Users';
import { Filltext2 } from './functional-components/Filltext2';
import { Filltext3 } from './functional-components/Filltext3';
import { Filltext4 } from './functional-components/Filltext4';
import { Carts5 } from './functional-components/Carts5';
import { Photos1 } from './Child-to-parent/Photos1';

function App() {
  return (
    <div className="App">
      {/* <Users/> */}
      {/* <Filltext2/> */}
    {/* <Filltext3/> */}
    {/* <Filltext4/> */}
    {/* <Carts5/> */}

    {/* hooks child to parent */}
    <Photos1/>
    </div>
  );
}

export default App;
