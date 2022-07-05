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
import { NavBAR } from './Components/NavBAR';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBAR/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='Abouts' element={<Abouts />} />
          <Route path='Contents' element={<Contents />} />
          <Route path='Gallerys' element={<Gallerys />} />
          <Route path='Projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


