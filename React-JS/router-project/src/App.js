import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Animal } from "./Component/Animal";
import { Birds } from "./Component/Birds";
import { Content } from "./Component/Content";
import { Flower } from "./Component/Flower";
import { Nature } from "./Component/Nature";
import Navebar from "./Component/Navebar";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navebar/>
        <Routes>
        <Route index element={<Animal/>}/>
        <Route path="birds" element={<Birds/>}/>
        <Route path="nature" element={<Nature/>}/>
        <Route path="flower" element={<Flower/>}/>
        <Route path="content" element={<Content/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
