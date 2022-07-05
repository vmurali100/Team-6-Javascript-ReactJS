import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { Context } from "./Component/Context";
import { Homepage } from "./Component/Homepage";
import { Info } from "./Component/Info";
import { Last } from "./Component/Last";
import { Nav } from "./Component/Nav";
import { Order } from "./Component/Order";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Nav/>
       <Routes>
          <Route path="Homepage" element={<Homepage/>}/>
          <Route path="info" element={<Info/>}/>
          <Route path="context" element={<Context/>}/>
          <Route path="order" element={<Order/>}/>
          <Route path="last" element={<Last/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
