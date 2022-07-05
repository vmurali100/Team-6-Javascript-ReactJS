import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import './App.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { NavBar } from './Components/NavBar';
import { Content } from './Components/Content';
import { Gallery } from './Components/Gallery';
import { Projects } from './Components/Projects';
import { Home1 } from './Component85/Home1';
import { Content1 } from './Component85/Content1';
import { About1 } from './Component85/About1';
import { Gallery1 } from './Component85/Gallery1';
import { Projects1 } from './Component85/Projects1';
import { NavBar1 } from './Component85/NavBar1';

function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //   <NavBar/>
     
    //   <Routes>
    //     <Route index element={<Home />}/>
    //     <Route path='content' element={<Content/>}/>
    //     <Route path='about' element={<About/>}/>
    //     <Route path='contact' element={<Contact/>} />
    //     <Route path='gallery' element={<Gallery/>}/>
    //     <Route path='projects' element={<Projects/>}/>
    //   </Routes>
    //   </BrowserRouter>
    // </div>

    <div className='App'>
         <BrowserRouter>
         <NavBar1/>
          <Routes>
          <Route index element={<Home1/>}/>
            <Route path='Content1' element={<Content1/>}/>
            <Route path='About1' element={<About1/>} />
            <Route path='Gallery1' element={<Gallery1/>}/>
            <Route path='Projects1' element={<Projects1/>}/>
          </Routes>
         </BrowserRouter>
    </div>
   
  );
}

export default App;
