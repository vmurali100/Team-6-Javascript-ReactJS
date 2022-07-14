import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
import Home from "./Component5/Home";
import About from "./Component5/About";
import Contact from "./Component5/Contact";
import Content from "./Component5/Content";
import Gallary from "./Component5/Gallary";
import Project from "./Component5/Project";
import Navbar from "./Component5/Navbar";

// import About from "./Component4/About";
// import Contact from "./Component4/Contact";
// import Gallary from "./Component4/Gallary";
// import Home from "./Component4/Home";
// import Navbar from "./Component4/Navbar";
// import Project from "./Component4/Project";

// import About from "./Component3/About";
// import Contact from "./Component3/Contact";
// import Gallary from "./Component3/Gallary";
// import Home from "./Component3/Home";
// import Navbar from "./Component3/Navbar";
// import Project from "./Component3/Project";

// import About from "./Component2/About";
// import Contact from "./Component2/Contact";
// import Content from "./Component2/Content";
// import Gallary from "./Component2/Gallary";
// import Home from "./Component2/Home";
// import Navbar from "./Component2/Navbar";
// import Project from "./Component2/Project";

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

      {/*<BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="content" element={<Content/>}/>
        <Route path="gallary" element={<Gallary/>}/>
        <Route path="project" element={<Project/>}/>
      </Routes>
      </BrowserRouter> */}
      {/* 
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="gallary" element={<Gallary/>}/>
        <Route path="project" element={<Project/>}/>
      </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="gallary" element={<Gallary/>}/>
        <Route path="project" element={<Project/>}/>
      </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="project" element={<Project />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;