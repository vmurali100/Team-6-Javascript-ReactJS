import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from './Basic-88-Projects/NavBar';
import { Home } from './Basic-88-Projects/Home';
import { About } from './Basic-88-Projects/About';
import { Gallery } from './Basic-88-Projects/Gallery';
import { Contact } from './Basic-88-Projects/Contact';
import { Projects } from './Basic-88-Projects/Projects';
import { Footer } from './Basic-88-Projects/Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
       <Routes>
       <Route index element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="gallery" element={<Gallery />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="projects" element={<Projects />}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
