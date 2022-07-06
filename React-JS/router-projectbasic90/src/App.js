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
import { Contents } from './Components/Contents';
import { Gallerys } from './Components/Gallerys';
import { Projects } from './Components/Projects';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='abouts' element={<Abouts/>}/>
        <Route path='contents' element={<Contents/>}/>
        <Route path='gallerys' element={<Gallerys/>}/>
        <Route path='projects' element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
