import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import { Candy } from './Component/Candy';
import { Content } from './Component/Content';
import { Chocolate } from './Component/Chocolate';
import { IceCream } from './Component/IceCream';
import { Navbar } from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="content" element={<Content/>}/>
        <Route path="candy" element={<Candy/>}/>
        <Route path="chocolate" element={<Chocolate/>}/>
        <Route path="icecream" element={<IceCream/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
