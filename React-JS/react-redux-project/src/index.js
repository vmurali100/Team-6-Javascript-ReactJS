import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { store } from './store';
import { store1 } from './store1';
import AppComp from './store1/AppComp';
import { store2 } from './store2';
import AppComponent2 from './store2/AppComponent2';
import { store3 } from './store3';
import AppCompo3 from './store3/AppCompo3';
import { store4 } from './store4';
import AppCom from './store4/AppCom';
import { store5 } from './store5';
import App5 from './store5/App5';
import { store6 } from './store6';
import App6 from './store6/App6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider  store={store6}>
    <React.StrictMode>
      {/* <App />      */}
      {/* <AppComp/> */}
      {/* <AppComponent2/> */}
      {/* <AppCompo3/> */}
      {/* <AppCom/> */}
      {/* <App5/> */}
      <App6/>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
