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
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Project } from "./Components/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route index element={<Home />}/>
        <Route path="content" element={<Content/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="project" element={<Project/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
