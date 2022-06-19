import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Albums from './FunComponTable/Albums';
import Prettytrue from './FunComponTable/Prettytrue';
import Pretty from './FunComponTable/Pretty';
import PreTrue from './FunComponTable/PreTrue';
import Posts from './FunComponTable/Posts';
import Filltext from './FunComponTable/Filltext';
import Userparent from './FunComponTable/Userparent';
import Todosparent from './FunComponTable/Todosparent';
import { Usersparent } from './FunComponTable/Usersparent';
import Commentsparent from './FunComponTable/Commentsparent';
import { Photosparent } from './FunComponTable/Photosparent';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Photosparent></Photosparent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
