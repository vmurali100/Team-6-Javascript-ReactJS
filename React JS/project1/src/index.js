import React from 'react';
import ReactDOM from 'react-dom/client';
import { Beach } from './Component/Beach';
import { Space } from './Component/Space';
import { Tree } from './Component/Tree';









import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Beach/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
