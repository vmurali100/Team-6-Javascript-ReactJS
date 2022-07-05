import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Gallery from './components/Gallery';
import{ Projects} from './components/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='Content'element={<Content/>} />
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Gallery' element={<Gallery/>}/>
        <Route path='Projects' element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
