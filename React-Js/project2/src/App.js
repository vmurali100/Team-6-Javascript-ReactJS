import logo from './logo.svg';
import './App.css';
import { Srinivascomp } from './Components/Srinivascomp';
import { VidyaComp } from './Components/VidyaComp';
import { Sample2FunComp } from './FunctionalComps/Sample2FunComp';
import { Sample3FunComp } from './FunctionalComps/Sample3FunComp';
import { Sample1FunComp } from './FunctionalComps/Sample1FunComp';
import { Sample1Comp } from './Components/Sample1Comp';
import { Sample2Comp } from './Components/Sample2Comp';
import { Sample3Comp } from './Components/Sample3Comp';
import { Sample4FunCompe } from './FunctionalComps/Sample4FunComp';
import { Sample5FunComp } from './FunctionalComps/Sample5FunComp';

function App() {
  return (
    <div className="App">
      {/* <Srinivascomp></Srinivascomp> */}
      {/* <VidyaComp></VidyaComp> */}  
      <Sample1FunComp></Sample1FunComp>
      <Sample2FunComp></Sample2FunComp>
      <Sample3FunComp></Sample3FunComp>
      <Sample4FunCompe></Sample4FunCompe>
      <Sample5FunComp></Sample5FunComp>
      <Sample1Comp></Sample1Comp>
      <Sample2Comp></Sample2Comp>
      <Sample3Comp></Sample3Comp>
    </div>
  );
}

export default App;
