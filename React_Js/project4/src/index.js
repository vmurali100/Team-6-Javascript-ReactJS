import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Filltext2 } from './functional component Child to Parent/Filltext2';
import { Filltext3 } from './functional component Child to Parent/Filltext3';
// import { User } from './functional component Child to Parent/User';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Filtext } from './functional component/Filtext';
// import { Comment } from './functional component/Comment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Filltext3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
