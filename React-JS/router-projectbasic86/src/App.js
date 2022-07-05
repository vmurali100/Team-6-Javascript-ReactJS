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
import { NavBar } from './Components/NavBar';
import { Contents } from './Components/Contents';
import { Projects } from './Components/Projects';
import { Gallery } from './Components/Gallery';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route index element={< Home/>}/>        
        <Route path='abouts' element={<Abouts/>}/>
        <Route path='contents' element={<Contents/>}/> 
        <Route path='projects' element={<Projects/>}/> 
        <Route path='gallery' element={<Gallery/>}/>     
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
