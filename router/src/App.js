import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { Content } from "./Component/Content";
import {Home} from "./Component/Home";
import { NaveBar } from "./Component/NaveBar";
import { Text } from "./Component/Text";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NaveBar/>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path="content" element={ <Content/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="text" element={<Text/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
