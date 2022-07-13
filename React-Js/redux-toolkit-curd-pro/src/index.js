import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import store from './store'
import reportWebVitals from './reportWebVitals';
import { store1 } from './store1/index1';
import { store2 } from './store2/index2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App/>
    </Provider>     */}
    {/* <Provider store={store1}>
      <App/>
    </Provider> */}
    <Provider store={store2}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
