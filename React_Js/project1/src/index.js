import React from 'react';
import ReactDOM from 'react-dom/client';
import { Bhar } from './component/Bhar';
import { Deepa } from './component/Deepa';
import { Neeraja } from './component/Neeraja';
import { Padhu } from './component/Padhu';
import { Sandhya } from './component/Sandhya';
import { Sowmya } from './component/Sowmya';
// import { Naveen } from './functional component/Naveen';
// import { Nithya } from './functional component/Nithya';
// import { Akhalya } from './functional component/Akhalya';
// import { Sai } from './functional component/Sai';
// import { Deepthi } from './functional component/Deepthi';
// import { Flowers } from './functional component/Flowers';
// import { Padmaja } from './functional component/Padmaja';
// import { Vidya } from './functional component/Vidya';

// import App from './App';
// import { Nithya } from './functional component/Nithya';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Deepa />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
