import logo from './logo.svg';
import './App.css';
import Parent1 from './functionalcomponent-parent-child/Parent1';

import Parent2 from './functionalcomponent-parent-child/Parent2';
import Parent3 from './functionalcomponent-parent-child/Parent3';
import Parent4 from './functionalcomponent-parent-child/Parent4';
import Parenc from './Functionalcomp-child to parent/Parenc';
import Parenc2 from './Functionalcomp-child to parent/Parenc2';
import Parenc3 from './Functionalcomp-child to parent/Parenc3';
import Parenc5 from './Functionalcomp-child to parent/Parenc5';
import Parent5 from './functionalcomponent-parent-child/Parent5';

function App() {
  
      return(
        <div>
          {/* <Parent1/>
          <Parent2/> */}
          <Parent3/>
          <Parent4/>
          <Parent5/>

            {/* <Parenc/>
            <Parenc2/> */}
            <Parenc3/>
            <Parent4/>
            <Parenc5/>
        </div>
      )
    
    

}

export default App;
