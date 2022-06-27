import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import Todoshook from './Components/Todoshook';
import Commenthook from './Components/Commenthook';
import Posthook from './Components/Posthook';
import Firsthook from './Components/Firsthook';

import Parenthook from './childtoparenthooks/Parenthook';
import Childhook from './childtoparenthooks/Childhook';
import Parenthook2 from './childtoparenthooks/Parenthook2';
import Parenthook3 from './childtoparenthooks/Parenthook3';
import Parenthook4 from './childtoparenthooks/Parenthook4';
import Parenthook5 from './childtoparenthooks/Parenthook5';


function App() {
  return (
    <div className="App">
      {/* <Users/> */}
      {/* <Todoshook/> */}
      {/* <Commenthook/> */}
      {/* <Posthook/> */}
      {/* <Firsthook/> */}

     {/* <Parenthook2/> */}
     {/* <Parenthook/> */}
     {/* <Parenthook3/> */}
     <Parenthook4/>
     {/* <Parenthook5/> */}
    </div>
  );
}

export default App;
