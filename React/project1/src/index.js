import React from 'react';
import ReactDOM from 'react-dom/client';
import { Deepthi } from './functional component/Deepthi';
// import './index.css';
// import App from './functional component/App';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Deepthi></Deepthi>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
