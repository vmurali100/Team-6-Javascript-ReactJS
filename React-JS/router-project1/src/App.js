import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Navebar from "./Component/Navebar";
import { Content } from "./Component/Content";
import { Lily } from "./Component/Lily";
import { Lotus } from "./Component/Lotus";
import { Rose } from "./Component/Rose";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
  <Navebar/>
      <Routes>
        <Route index element={<Lily/>}/>
        <Route path="content" element={ <Content/>}/>
        <Route path="lotus" element={<Lotus/>}/>
        <Route path="rose" element={<Rose/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
