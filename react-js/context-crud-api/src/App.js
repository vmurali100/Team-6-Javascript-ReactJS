import logo from './logo.svg';
import './App.css';
import React from 'react'
import {GlobalProvider} from './Glo'


function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;

