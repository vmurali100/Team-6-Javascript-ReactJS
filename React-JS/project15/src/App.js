import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Basic-87-Templates/Home';
import { Gallery } from './Basic-87-Templates/Gallery';
import { Details } from './Basic-87-Templates/Details';
import { About } from './Basic-87-Templates/About';
import { Contact } from './Basic-87-Templates/Contact';
import { NavBar } from './Basic-87-Templates/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="details" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
