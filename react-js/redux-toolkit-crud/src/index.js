import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import store from './store/indexs';
import reportWebVitals from './reportWebVitals';
import stores1 from './stores1/one';
import store2 from './store2/two';
import store3 from './store3/three';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //   <App/>
  //   </Provider>
  // </React.StrictMode>

  // <React.StrictMode>
  //     <Provider store={stores1}>
  //      <App/>
  //     </Provider>
  // </React.StrictMode>

  // <React.StrictMode>
  //   <Provider store={store2}>
  //     <App/>
  //   </Provider>
  // </React.StrictMode>

  <React.StrictMode>
    <Provider store={store3}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
