import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hellow from './Components/Hellow';
import { Harish } from './Harish';
import { Mansur } from './Mansur';
import { Nithya } from './Nithya';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Harish/> */}
    <Hellow/>
    
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
