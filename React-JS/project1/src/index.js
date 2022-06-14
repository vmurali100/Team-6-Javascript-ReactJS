import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Practice1 } from './Practice1';
import { Practice2 } from './Practice2';
import { Practice3 } from './Practice3';
import { Practice4 } from './Practice4';
import { Practice5 } from './Practice5';
import { Practice6 } from './Practice6';
import { Practice7 } from './Practice7';
import { Practice8 } from './Practice8';
import { Practice9 } from './Practice9';
import { Practice10 } from './Practice10';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Practice1/>
    <Practice2/>
    <Practice3/>
    <Practice4/>
    <Practice5/>
    <Practice6/>
    <Practice7/>
    <Practice8/>
    <Practice9/>
    <Practice10/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
