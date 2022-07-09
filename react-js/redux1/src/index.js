import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import store3 from './store3/jeeva';
import store6 from './store6/ravi';
import store7 from './store7/bavya';
import store8 from './store8/mani';

import App3 from './App3';

import App6 from './App6';
import App7 from './App7';
import App8 from './App8';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  // <Provider store={store}>
  //      <React.StrictMode>
  //     <App />
  //    </React.StrictMode>
  // </Provider>
      

  

  // <Provider store={store3}>
  //   <React.StrictMode>
  //     <App3/>
  //   </React.StrictMode>
  // </Provider>

  // <Provider store={store6}>
  //   <React.StrictMode>
  //     <App6/>
  //   </React.StrictMode>
  // </Provider>

  <Provider store={store7}>
    <React.StrictMode>
      <App7/>
    </React.StrictMode>
  </Provider>

  // <Provider store={store8}>
  //   <React.StrictMode>
  //     <App8/>
  //   </React.StrictMode>
  // </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
