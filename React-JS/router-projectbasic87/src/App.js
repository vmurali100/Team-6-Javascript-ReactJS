import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Home } from './Components/Home';
import { Abouts } from './Components/Abouts';
import { Navbar } from './Components/Navbar';
import { Gallery } from './Components/Gallery';
import { Projects } from './Components/Projects';
import { Contents } from './Components/Contents';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='abouts' element={<Abouts/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='projects' element={<Projects/>}/> 
        <Route path='contents' element={<Contents/>}/>            
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
