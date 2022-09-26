
import './App.css';

import React, {useState} from 'react';
import Child from './CtoP/Child';
function App() {
  const [val, setVal] = useState("initial value")
  // const [parent,parentData]=useState();
  return (
    <div className="App">
      {/* <p>this is a parent data?: {parent}</p>
      <Child tochild={parent} sendtoparent={parentData} /> */}
      <Child onChange={(value)=> setVal(value)}/>
      <div>{val}</div>
    </div>
  );
}

export default App;
