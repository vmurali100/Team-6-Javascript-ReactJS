import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Basic-89-Templates/Home';
import { Gallery } from './Basic-89-Templates/Gallery';
import { About } from './Basic-89-Templates/About';
import { Contact } from './Basic-89-Templates/Contact';
import { Projects } from './Basic-89-Templates/Projects';
import { NavBar } from './Basic-89-Templates/NavBar';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
       <Routes>
       <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="projects" element={<Projects />}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
