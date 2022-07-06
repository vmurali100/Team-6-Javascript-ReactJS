import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Content } from "./Component/Content";
import { Cat } from "./Component/Cat";
import { Lion } from "./Component/Lion";
import Naveba from "./Component/Naveba";
import { Tiger } from "./Component/Tiger";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Naveba></Naveba>
      <Routes>
        <Route index element={<Content/>}/>
        <Route path="cat" element={<Cat/>}/>
        <Route path="lion" element={<Lion/>}/>
        <Route path="tiger" element={<Tiger/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
