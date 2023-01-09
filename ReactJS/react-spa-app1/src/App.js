import { lazy, Suspense } from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Layout from "./Components/Layout";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";
import Profile from "./Components/Profile";
// import Content from "./Components/Content";
const LazyContent = lazy(()=> import('./Components/Content'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="features" element={<Features />} />
          </Route>
          <Route path="products" element={<Products/>}>
            <Route path=":id" element={<ProductDetails/>}/>
          </Route>
          {/* <Route path="content" element={<Content/>}/> */}
          <Route path="content" element={
            <Suspense>
              <LazyContent/>
            </Suspense>
          }/>
          <Route path="profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
