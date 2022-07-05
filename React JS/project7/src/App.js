
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route index element={<Home />}/>
      <Route path="About" element={<About />}/>
      <Route path="Contact" element={<Contact />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
