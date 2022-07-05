import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import { Conclution } from "./comp/Conclution";
import { Container } from "./comp/Container";
import { Customers } from "./comp/Customers";
import { Navpart } from "./comp/Navpart";
import { Pricedetails } from "./comp/Pricedetails";
import { Productspage } from "./comp/Productspage";
import { Catogories } from "./Component/Catogories";
import { Community } from "./Component/Community";
import { Electronic } from "./Component/Electronic";
import { Fashions } from "./Component/Fashions";
import { Navli } from "./Component/Navli";
import { Orders } from "./Component/Orders";
import { Context1 } from "./Components/Context1";
import { Datas1 } from "./Components/Datas1";
import { End } from "./Components/End";
import { Galaxy } from "./Components/Galaxy";
import { Homes1 } from "./Components/Homes1";
import { Navpath } from "./Components/Navpath";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Navli/>
      <Routes>
        <Route path="Catogories" element={<Catogories/>}/>
        <Route path="Community" element={<Community/>}/>
        <Route path="electronic" element={<Electronic/>}/>
        <Route path="fashions" element={<Fashions/>}/>
        <Route path="orders" element={<Orders/>}/>
      </Routes>
      </BrowserRouter> */}


      {/* <BrowserRouter>
      <Navpart/>
      <Routes>
        <Route path="container" element={<Container/>}/>
        <Route path="customers" element={<Customers/>}/>
        <Route path="pricedetails" element={<Pricedetails/>}/>
        <Route path="productspage" element={<Productspage/>}/>
        <Route path="conclusion" element={<Conclution/>}/>
      </Routes>
      </BrowserRouter> */}


      <BrowserRouter>
      <Navpath/>
      <Routes>
      <Route path="Homes1" element={<Homes1/>}/>
        <Route path="context1" element={<Context1/>}/>
        <Route path="Datas1" element={<Datas1/>}/>
        <Route path="Galaxy" element={<Galaxy/>}/>
        <Route path="end" element={<End/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
