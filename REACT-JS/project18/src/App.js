import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Gallery } from './Components/Gallery';
import { Contact } from './Components/Contact';
import { Project } from './Components/Project';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route index element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="gallery" element={<Gallery />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="project" element={<Project />}/>
       </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
