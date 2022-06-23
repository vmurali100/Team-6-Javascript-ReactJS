import React from 'react';
import ReactDOM from 'react-dom/client';
import { Todoss } from '../../project3/src/Child-Parent-ClassComponent/Todoss';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Todoss></Todoss>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
