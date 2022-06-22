import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Album from './Sibling Components/Child to Parent-Class/Album';
import Comments from './Sibling Components/Child to Parent-Class/Comments';
import Photos from './Sibling Components/Child to Parent-Class/Photos';
import Todos from './Sibling Components/Child to Parent-Class/Todos';
import Users from './Sibling Components/Child to Parent-Class/Users';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Users></Users>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
