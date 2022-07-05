import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { Content } from "./Component/Content";
import { Footer } from "./Component/Footer";
import { Gallery } from "./Component/Gallery";
import { Grosaries } from "./Component/Grosaries";
import { Home } from "./Component/Home";
import { List } from "./Component/List";
import { Maincontent } from "./Component/Maincontent";
import { Navbar } from "./Component/Navbar";
import { Navbar1 } from "./Component/Navbar1";
import { Photos } from "./Component/Photos";
import { Project } from "./Component/Project";




function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route index element={<Home />}/>
        <Route path="content" element={<Content/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="project" element={<Project/>}/>
      </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="maincontent" element={<Maincontent/>}/>
        <Route path="grosaries" element={<Grosaries/>}/>
        <Route path="photos" element={<Photos/>}/>
        <Route path="list" element={<List/>}/>
        <Route path="footer" element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
