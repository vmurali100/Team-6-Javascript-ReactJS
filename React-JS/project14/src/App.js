import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Basic-86-Templates/Home';
import { About } from './Basic-86-Templates/About';
import { Gallery } from './Basic-86-Templates/Gallery';
import { Contact } from './Basic-86-Templates/Contact';
import { Remarks } from './Basic-86-Templates/Remarks';
import { NavBar } from './Basic-86-Templates/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="remarks" element={<Remarks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
