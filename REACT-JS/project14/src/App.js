import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Home';
import { Contact } from './Contact';
import { About } from './About';
import { Navbar } from './Navbar';
import { Galary } from './Galary';
import { Project } from './Project';
import { Content } from './Content';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />}/>
      <Route path="about" element={<About />} />
      <Route path="galary" element={<Galary />} />
      <Route path="project" element={<Project/>} />

       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
