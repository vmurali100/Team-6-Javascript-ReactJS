import React from 'react';
import ReactDOM from 'react-dom/client';
import { Palbums } from './class parent to child/Palbums';
import { Pcarts } from './class parent to child/Pcarts';
import { Pcomment } from './class parent to child/Pcomment';
import { Pfilltext } from './class parent to child/Pfilltext';
import { Pfilltext2 } from './class parent to child/Pfilltext2';
import { Pfilltext3 } from './class parent to child/Pfilltext3';
// import { Product } from './functional Child to Parent/Product';
// import { Users } from './functional Child to Parent/Users';
// import { Photos } from './functional component Child to Parent/Photos';
// import { Carts } from './functional component Child to Parent/Carts';
// import { Posts } from './functional component Child to Parent/Posts';
// import { Albums } from './functional component Child to Parent/Albums';
// import { Todos } from './functional component Child to Parent/Todos';
// import { Filltext2 } from './functional component Child to Parent/Filltext2';
// import { Filltext3 } from './functional component Child to Parent/Filltext3';
// import { User } from './functional component Child to Parent/User';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Filtext } from './functional component/Filtext';
// import { Comment } from './functional component/Comment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pfilltext3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
