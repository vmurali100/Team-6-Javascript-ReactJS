import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from './Basic-85/NavBar';
import { Home } from './Basic-85/Home';
import { About } from './Basic-85/About';
import { Gallery } from './Basic-85/Gallery';
import { ContactUs } from './Basic-85/ContactUs';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
       <Routes>
       <Route index element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="gallery" element={<Gallery />} />
       <Route path="contact" element={<ContactUs />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
