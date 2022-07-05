
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Content from "./Components/Content";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Gallary from "./Gallary";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="content" element={<Content/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="gallary" element={<Gallary/>}/>
        <Route path="project" element={<Project/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
