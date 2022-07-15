import React from 'react';
import './App.css';
import { Parent1PostComp } from './Class Components/Child-Parent-Component/Parent1PostComp';
import { Parent2Filltext2 } from './Class Components/Child-Parent-Component/Parent2Filltext2';
import { Parent3Filltext3 } from './Class Components/Child-Parent-Component/Parent3Filltext3';
import { Parent4Comment4 } from './Class Components/Child-Parent-Component/Parent4Comment4';
import { Parent5todos5 } from './Class Components/Child-Parent-Component/Parent5todos5';
import { ClassParent1Post1 } from './Class Components/Parent-Child-Component/ClassParent1Post1';
import { ClassParent2Albums2 } from './Class Components/Parent-Child-Component/ClassParent2Albums2';
import { ClassParent3Fill3 } from './Class Components/Parent-Child-Component/ClassParent3Fill3';
import { ClassParent4Fill4 } from './Class Components/Parent-Child-Component/ClassParent4Fill4';
import { ClassParent5Comment5 } from './Class Components/Parent-Child-Component/ClassParent5Comment5';
import { ClassParent6Todos } from './Class Components/Parent-Child-Component/ClassParent6Todos6';
import { AllClassComp } from './Components/AllCalssComp';
import FillText from './Components/FillText';
import { AllCom } from './Functional Component/AllCom';

function App() {
  return (
    <div className="App">
      {/* <FillText/> */}
      {/* <AllClassComp/> */}
       {/* Functionalcomponent :-*/}
      {/* <AllCom/> */}

      {/* classcomponent :-*/}
      {/* <AllClassComp/> */}

      <Parent1PostComp/>
      {/* <Parent2Filltext2 /> */}
      {/* <Parent3Filltext3/> */}
      {/* <Parent4Comment4/> */}
      {/* <Parent5todos5/> */}

      {/* <ClassParent1Post1/> */}
      {/* <ClassParent2Albums2/> */}
      {/* <ClassParent3Fill3/> */}
      {/* <ClassParent4Fill4/> */}
      {/* <ClassParent5Comment5/> */}
      {/* <ClassParent6Todos/> */}
    </div>
  );
}

export default App;
