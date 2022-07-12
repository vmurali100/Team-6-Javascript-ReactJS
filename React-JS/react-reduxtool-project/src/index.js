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
import store5 from './store5';
import App5 from './store5/App5';
import store6 from './store6';
import App6 from './store6/App6';
import store7 from './store7';
import App7 from './store7/App7';
import store8 from './store8';
import App8 from './store8/App8';
import store9 from './store9';
import App9 from './store9/App9';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store9}>
    <React.StrictMode>
      {/* <App /> */}
      {/* <App2/> */}
      {/* <App3/> */}
      {/* <App4/> */}
      {/* <App5/> */}
      {/* <App6/> */}
      {/* <App7/> */}
      {/* <App8/> */}
      <App9/>
    </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();