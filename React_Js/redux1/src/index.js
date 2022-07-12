import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import { store } from './store2';
import {  store3 } from './store3';
import App3 from './store3/App3';
import App4 from './store4/App4';
import { store4 } from './store4';
import { store, store5 } from './store5';
import App5 from './store5/App5';
import App6 from './store6/App6';
import { store6 } from './store6';
import { store7 } from './store7';
import App7 from './store7/App7';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  //   <React.StrictMode>
   //  <App />
  // </React.StrictMode>
  // </Provider>

  // <Provider store={store3}>
  //   <React.StrictMode>
  //    <App3 />
  //  </React.StrictMode>
  // </Provider>

  // <Provider store={store4}>
  //   <React.StrictMode>
  //     <App4 />
  //  </React.StrictMode>
  // </Provider>

  // <Provider store={store5}>
  //   <React.StrictMode>
  //     <App5 />
  //  </React.StrictMode>
  // </Provider>

  // <Provider store={store6}>
  //   <React.StrictMode>
  //     <App6 />
  //  </React.StrictMode>
  // </Provider>

  <Provider store={store7}>
     <React.StrictMode>
      <App7 />
   </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
