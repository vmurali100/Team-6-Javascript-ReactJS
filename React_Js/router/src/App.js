import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import './App.css';
import About from "./Component2/About";
import Contact from "./Component2/Contact";
import Content from "./Component2/Content";
import Gallary from "./Component2/Gallary";
import Home from "./Component2/Home";
import Navbar from "./Component2/Navbar";
import Project from "./Component2/Project";
// import About from "./Component1/About";
// import Contact from "./Component1/Contact";
// import Content from "./Component1/Content";
// import Gallary from "./Component1/Gallary";
// import Home from "./Component1/Home";
// import Navbar from "./Component1/Navbar";
// import Project from "./Component1/Project";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="content" element={<Content/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="gallary" element={<Gallary/>}/>
        <Route path="project" element={<Project/>}/>
      </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="content" element={<Content/>}/>
        <Route path="gallary" element={<Gallary/>}/>
        <Route path="project" element={<Project/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
