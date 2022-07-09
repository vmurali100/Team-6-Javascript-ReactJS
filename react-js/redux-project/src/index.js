import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import{Provider} from 'react-redux'
import { store } from './store';
import App1 from './App1';
import { store1 } from './store/store1/nithya';
import { store2 } from './store2/haris';
import { store3 } from './store3/latha';
import { store4 } from './store4/Babu';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  //     <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // </Provider>

  // <Provider store={store1}>
  //   <React.StrictMode>
  //     <App1/>
  //   </React.StrictMode>
  // </Provider>


  // <Provider store={store2}>
  //   <React.StrictMode>
  //     <App2/>
  //   </React.StrictMode>
  // </Provider>
 
  // <Provider store={store3}>
  //   <React.StrictMode>
  //     <App3/>
  //   </React.StrictMode>
  // </Provider>

  <Provider store={store4}>
    <React.StrictMode>
       <App4/>
    </React.StrictMode>
  </Provider>
  
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
