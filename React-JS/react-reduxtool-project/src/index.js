import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store'
import store2 from './store2';
import App2 from './store2/App2';
import store3 from './store3';
import App3 from './store3/App3';
import App4 from './store4/App4';
import store4 from './store4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store4}>
    <React.StrictMode>
      {/* <App /> */}
      {/* <App2/> */}
      {/* <App3/> */}
      <App4/>
    </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
