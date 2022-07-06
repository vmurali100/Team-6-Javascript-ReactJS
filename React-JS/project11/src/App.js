import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { NavBar } from './Components/NavBar';
import { Content } from './Components/Content';
import { Gallery } from './Components/Gallery';
import { Projects } from './Components/Projects';
 

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <NavBar/>
          <Content/>
       <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="projects" element={<Projects/>}/>
       </Routes>
       </BrowserRouter>
          
    </div>
  );
}

export default App;
