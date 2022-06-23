import logo from './logo.svg';
import './App.css';
import Parent1 from './CLASS COMPONENTS/Parent1';
import Parent2 from './CLASS COMPONENTS/Parent2';
import Parent3 from './CLASS COMPONENTS/Parent3';
import Parent4 from './CLASS COMPONENTS/Parent4';
import Parent5 from './CLASS COMPONENTS/Parent5';
import ParentsiblingComponents from './SIBLING COMPONENTS/FUNC-COMPONENT/ParentSiblingComponts';
import ParentClassSiblingComponents from './SIBLING COMPONENTS/CLASS  COMPONENT/ParentSiblingCompnents';



function App() {
  return (
    <div className="App">
    
     {/* <Parent1/> */}
     {/* <Parent2/> */}
    {/* <Parent3/> */}
    {/* <Parent4/> */}
    {/* <Parent5/> */}
    {/* <ParentsiblingComponents/> */}
    <ParentClassSiblingComponents/>
    
     
      
    </div>
  );
}

export default App;
