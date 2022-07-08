import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { About } from "./Components/About";
import { Content } from "./Components/Content";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route index element={<Home/>}/>
     <Route path="content" element={<Content/>}/>
     <Route path="about" element={<About/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
