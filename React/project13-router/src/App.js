
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Content } from "./Components/Content";
import { Gallery } from "./Components/Gallery";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
     
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="Content" element={<Content/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Gallery" element={<Gallery/>}/>
        <Route path="Projects" element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
