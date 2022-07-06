import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Content } from './Component/Content';
import { Navbar } from './Component/Navbar';
import { Woman } from './Component/Woman';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="content" element={<Content/>}/>
    <Route path="woman" element={<Woman/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
